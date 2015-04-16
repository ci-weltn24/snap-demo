/**
 * cssmin: grunt-contrib-cssmin
 *
 * Minify CSS files. Overrides the original (generated) css files (without .min.css).
 *
 * https://github.com/gruntjs/grunt-contrib-cssmin
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        dist: {
            files: [{
                expand: true,
                cwd: options.stylesheets.target,
                src: ['*.css', '!*.min.css'],
                dest: options.stylesheets.target
            }]
        }
    };
};
