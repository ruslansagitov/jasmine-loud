/* globals loud */
beforeEach(() => {
    jasmine.addMatchers({
        toBeSaid(util, ...args) {
            let undef;
            /* istanbul ignore next: compatibility */
            const customEqualityTesters =
                  args[0] && !args[0].deprecated ? args[0] : undef;

            return {
                compare(actual, expected) {
                    /* istanbul ignore next: compatibility */
                    let pp = util.pp ? util.pp : jasmine.pp,
                        words = loud.say(actual),
                        prettyWords = pp(words),
                        prettyExpected = pp(expected),
                        pass, message;

                    pass = util.equals(words, expected,
                        customEqualityTesters);

                    message = `Expected ${prettyWords
                    }${pass ? ' not' : ''
                    } to be said ${prettyExpected}.`;

                    return {
                        pass,
                        message
                    };
                }
            };
        }
    });
});
