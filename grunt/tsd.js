/**
 * tsd: grunt-tsd
 *
 * TypeScript definition.
 *
 * @link https://github.com/borisyankov/DefinitelyTyped
 * How to install new definitions:
 * $ tsd query [name-of-lib] --action install --save
 *
 * @link https://github.com/DefinitelyTyped/grunt-tsd
 * @link https://github.com/DefinitelyTyped/tsd
 *
 * @link http://definitelytyped.org/
 * @link http://definitelytyped.org/tsd/
 */
module.exports = function () {
    'use strict';

    return {
        install: {
            options: {
                // execute a command
                command: 'reinstall',

                //optional: always get from HEAD
                latest: true,

                // specify config file
                config: 'tsd.json'
            }
        }
    };
};
