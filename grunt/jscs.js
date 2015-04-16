/**
 * jscs: grunt-jscs
 *
 * JavaScript CodeStyle checker
 *
 * http://jscs.info/
 * https://github.com/jscs-dev/grunt-jscs
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        src: [
            options.javascripts.src + '/**/*.js',
            // excludes
            '!' + options.javascripts.src + '/bower_components/**/*.*',
            '!' + options.javascripts.src + '/components/**/*.*'
        ],
        options: {
            config: '.jscs-config.json'
        }
    };
};
