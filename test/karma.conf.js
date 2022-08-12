'use strict';

module.exports = function(config) {
    let browsers = [],
        plugins = [
            'karma-coverage',
            'karma-jasmine',
            'karma-loud'
        ];

    if (process.env.KARMA_BROWSERS) {
        browsers = process.env.KARMA_BROWSERS.split(',');

        for (let name of browsers) {
            plugins.push(`karma-${name.toLowerCase()}-launcher`);
        }
    }

    config.set({
        plugins,
        frameworks: ['jasmine', 'loud'],
        browsers,
        files: [
            '../lib/jasmine-loud.js',
            'test.js'
        ],
        reporters: ['dots']
    });

    if (process.env.KARMA_COVERAGE) {
        config.set({
            preprocessors: {
                '../lib/**/*.js': ['coverage']
            },
            coverageReporter: {
                type: process.env.KARMA_COVERAGE,
                dir: '../coverage/',
                subdir(browser) {
                    return browser.toLowerCase().split(/[ /-]/)[0];
                }
            },
            reporters: ['dots', 'coverage']
        });
    }
};
