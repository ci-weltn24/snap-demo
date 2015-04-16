/**
 * scsslint: grunt-scss-lint
 *
 * linting scss files: https://www.npmjs.com/package/grunt-scss-lint
 */
module.exports = function (grunt, options) {
    "use strict";

    return {
        allFiles: [
            options.stylesheets.src + '/**/*.scss'
        ],
        options: {
            config: '.scss-lint.yml',
            reporterOutput: options.reports + '/scss-lint-report.xml',
            colorizeOutput: true,
            exclude: [
                options.stylesheets.src + 'bower_components/**/*.*',
                options.stylesheets.src + 'generated/**/*.*',
                options.stylesheets.src + 'vendor/**/*.*',
                options.stylesheets.src + 'generic/_generic.normalize.scss'
            ]
        }
    };
};
