/**
 * grunt-asset-hash
 *
 * Generates a map with hashes for static files (css, js, images, etc.)
 *
 * Info:
 * If task is running with '--dev' parameter we don't hash anything and no source maps are generated.
 *
 * github: https://github.com/rich-nguyen/grunt-asset-hash
 * see: conf/assets/assets.json
 **/
module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            assetMap: options.hash.target + '/' + options.hash.mapFileName,
            srcBasePath: options.assets.target,
            destBasePath: options.hash.target,
            hashLength: options.isDev ? 0 : 32
        },
        all: {
            options: {
                preserveSourceMaps: !options.isDev
            },
            files: [
                {
                    src: [options.assets.target + '/**/*'],
                    dest: options.hash.target
                }
            ]
        }
    };
};
