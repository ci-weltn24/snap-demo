/**
 * cssshrink: grunt-cssshrink
 *
 * Additional CSS Minify'er (more rules the shrink css files)
 *
 * https://github.com/stoyan/cssshrink
 * http://cssshrink.com/
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            log: options.isDev
        },
        dist: {
            files: [{
                expand: true,
                cwd: options.stylesheets.target,
                src: ['*.css'],
                dest: options.stylesheets.target
            }]
        }
    };
};
