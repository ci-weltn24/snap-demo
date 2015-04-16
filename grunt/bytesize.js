/**
 * bytesize: grunt-bytesize
 *
 * https://github.com/jgallen23/grunt-bytesize
 *
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        dist: {
            src: [
                options.javascripts.target + '/core.js',
                options.javascripts.target + '/bootstraps/app.js'
            ]
        }
    };
};
