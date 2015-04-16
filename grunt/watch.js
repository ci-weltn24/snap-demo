/**
 * Watcher: grunt-contrib-watch
 *
 * Watching files changes and run specific tasks
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        javascripts: {
            files: [options.javascripts.src + '/**/*.js'],
            tasks: ['validate:js', 'compile:js', 'asset_hash', 'copy:javascripts']
        },
        typescript: {
            files: [options.typescript.src + '/**/*.ts'],
            tasks: ['validate:typescript', 'compile:script', 'asset_hash', 'copy:javascripts']
        },
        stylesheets: {
            files: [options.stylesheets.src + '/**/*.scss'],
            tasks: ['validate:css', 'compile:css', 'asset_hash', 'copy:stylesheets']
        }
    };
};
