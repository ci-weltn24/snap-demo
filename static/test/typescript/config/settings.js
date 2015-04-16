module.exports = function (config) {
    'use strict';

    return {
        // root of project
        basePath: './../../../../',
        frameworks: ['jasmine', 'requirejs'],

        files: [
            {pattern: 'static/test/typescript/components/sinonjs/sinon.js', included: true},
            {pattern: 'static/test/typescript/components/jasmine-sinon/jasmine-sinon.js', included: true},
            {pattern: 'static/test/typescript/setup.js', included: true},
            {pattern: 'static/test/typescript/main.js', included: true},
            {pattern: 'static/test/typescript/components/**/!(*.spec.js)', included: false}, // test vendor libs
            {pattern: 'static/test/javascripts/helpers/**/*.js', included: false},

            {pattern: 'static/src/javascripts/components/**/*.js', included: false}, // src vendor libs
            {pattern: 'static/test/typescript/helpers/**/*.js', included: false}, // src helpers
            {pattern: 'static/.tmp/typescript/specs/**/*.js', included: false}, // src + test
            {pattern: 'static/.tmp/typescript/specs/**/*.html', included: false} // src fixtures
        ],

        exclude: [
            'static/src/typescript/bower_components/**/*.js',
            'static/src/javascripts/bower_components/**/*.js'
        ],

        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],
        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false,
        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    dir: 'static/.tmp/coverage/'
                },
                {type: 'text-summary'}
            ]
        }
    };
};
