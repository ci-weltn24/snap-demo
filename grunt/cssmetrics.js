/**
 * cssmetrics: grunt-css-metrics
 *
 * Some CSS metrics:
 * - files size (incl. gzip)
 * - max selectors
 * - max rules
 *
 * https://github.com/phamann/grunt-css-metrics
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        dist: {
            options: {
                quiet: false,
                maxSelectors: 4096, //IE max rules
                maxFileSize: 10240000 //1mb in bytes
            },
            src: [
                options.stylesheets.target + '/*.css'
            ]
        }
    };
};
