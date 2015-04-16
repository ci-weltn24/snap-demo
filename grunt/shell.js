/**
 * grunt-shell
 *
 * access to shell from grunt tasks
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        installBowerStylesheets: {
            options: {
                execOptions: {
                    cwd: options.stylesheets.src
                }
            },
            command: 'bower-installer'
        },
        installBowerJavascripts: {
            options: {
                execOptions: {
                    cwd: options.javascripts.src
                }
            },
            command: 'bower-installer'
        },
        //installBowerJavascriptsTest: {
        //    options: {
        //        execOptions: {
        //            cwd: options.javascripts.test
        //        }
        //    },
        //    command: 'bower-installer'
        //},
        //installBowerTypeScript: {
        //    options: {
        //        execOptions: {
        //            cwd: options.typescript.src
        //        }
        //    },
        //    command: 'bower-installer'
        //},
        installBowerTypeScriptTest: {
            options: {
                execOptions: {
                    cwd: options.typescript.test
                }
            },
            command: 'bower-installer'
        }
    };
};
