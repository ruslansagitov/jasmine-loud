beforeEach(function() {
    jasmine.addMatchers({
        toBeSaid: function(util, customEqualityTesters) {
            return {
                compare: function(actual, expected) {
                    var result = {};

                    result.pass = util.equals(loud.say(actual),
                                              expected,
                                              customEqualityTesters);

                    return result;
                }
            };
        }
    });
});
