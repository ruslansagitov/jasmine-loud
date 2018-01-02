/* globals loud */
beforeEach(function() {
    jasmine.addMatchers({
        toBeSaid: function(util, customEqualityTesters) {
            return {
                compare: function(actual, expected) {
                    var words = loud.say(actual),
                        prettyWords = jasmine.pp(words),
                        prettyExpected = jasmine.pp(expected),
                        pass, message;

                    pass = util.equals(words, expected,
                        customEqualityTesters);

                    message = 'Expected ' + prettyWords +
                              (pass ? ' not' : '') +
                              ' to be said ' + prettyExpected + '.';

                    return {
                        pass: pass,
                        message: message
                    };
                }
            };
        }
    });
});
