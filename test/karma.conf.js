'use strict';

module.exports = function(config) {
    var browsers = [],
        plugins = [
            'karma-coverage',
            'karma-jasmine',
            'karma-loud'
        ];

    if (process.env.KARMA_BROWSERS) {
        browsers = process.env.KARMA_BROWSERS.split(',');

        browsers.forEach(function(name) {
            plugins.push('karma-' + name.toLowerCase() + '-launcher');
        });
    }

    config.set({
        plugins: plugins,
        frameworks: ['jasmine', 'loud'],
        browsers: browsers,
        files: [
            require.resolve('es5-shim'),
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
                dir: '../coverage/'
            },
            reporters: ['dots', 'coverage']
        });
    }
};
