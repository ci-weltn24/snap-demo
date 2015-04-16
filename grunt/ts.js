/**
 * ts: grunt-ts
 *
 * TypeScript compiler
 *
 * @link https://github.com/TypeStrong/grunt-ts
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            module: 'amd',
            target: 'es5',
            fast: 'never'
        },
        src: {
            options: {
                sourceMap: false
            },
            src: [
                options.typescript.src + '/**/*.ts',
                '!' + options.typescript.src + '/**/*.spec.ts'
            ],
            outDir: options.typescript.target
        },
        test: {
            options: {
                sourceMap: false
            },
            src: [
                options.typescript.src + '/**/*.ts'
            ],
            outDir: options.typescript.tmp + '/specs'
        }
    };
};
