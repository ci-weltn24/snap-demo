/**
 * px_to_rem: grunt-contrib-less
 *
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        dist: {
            options: {
                base: 16,
                fallback: true,
                fallback_existing_rem: true,
                ignore: [
                    'border-top',
                    'border-right',
                    'border-bottom',
                    'border-left',
                    'border',
                    'width',
                    'max-width',
                    'height',
                    'max-height',
                    'min-height',
                    'min-width',
                    'background-image',
                    'background-size',
                    'margin-top',
                    'margin-right',
                    'margin-bottom',
                    'margin-left'
                ]
            },
            files: [
                {
                    expand: true,
                    cwd: options.stylesheets.target,
                    src: '**/*.css',
                    dest: options.stylesheets.target
                }
            ]
        }
    };
};
