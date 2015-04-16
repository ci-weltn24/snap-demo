/**
 * Autoprefixer: grunt-autoprefixer
 *
 * Automatic vendor-prefixes in css properties
 */
module.exports = function (grunt, options) {
    "use strict";

    return {
        options: ['last 1 version'],
        dist: {
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
