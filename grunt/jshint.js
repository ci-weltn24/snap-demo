/**
 * jshint: grunt-contrib-jshint
 *
 * Linting JS files.
 */
module.exports = function (grunt, options) {
    'use strict';
    
    return {
        options: {
            jshintrc: '.jshintrc',
            ignores: [
                options.javascripts.src + '/bower_components/**/*.*',
                options.javascripts.src + '/components/**/*.*',
                options.javascripts.src + '/projects/common/generated/**/*.*'
            ]
        },
        all: [
            '!Gruntfile.js',
            options.javascripts.src + '/**/*.js'
        ]
    };
};
