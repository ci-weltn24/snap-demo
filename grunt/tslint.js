/**
 * tslint: grunt-tslint
 *
 * TypeScript Linter.
 *
 * @link https://github.com/palantir/grunt-tslint
 * @link https://github.com/palantir/tslint
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            configuration: grunt.file.readJSON('tslint.json')
        },
        all: {
            src: [
                options.typescript.src + '/**/*.ts',
                '!' + options.typescript.src + '/**/*.spec.ts',
                '!' + options.typescript.src + '/declarations/**/*.ts'
            ]
        }
    };
};
