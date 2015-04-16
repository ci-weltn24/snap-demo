/**
 * sass: grunt-sass
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            style: 'compressed',
            sourcemap: options.isDev,
            noCache: true,
            quiet: !options.isDev,
            bundleExec: true
        },
        dist: {
            files: [{
                expand: true,
                cwd: options.stylesheets.src,
                src: ['*.scss'],
                dest: options.stylesheets.target,
                rename: function (dest, src) {
                    return dest + src.replace('scss', 'css');
                }
            }]
        },
        styleguide: {
            files: [{
                expand: true,
                cwd: options.styleguide.src,
                src: ['*.scss', '!_*'],
                dest: options.styleguide.target,
                rename: function (dest, src) {
                    return dest + src.replace('scss', 'css');
                }
            }]
        }
    };
};
