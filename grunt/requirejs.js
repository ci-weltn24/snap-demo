module.exports = function (grunt, options) {
    'use strict';

    return {
        options: {
            baseUrl: options.require_js.src,
            paths: {
                bean: 'components/bean/bean',
                bonzo: 'components/bonzo/bonzo',
                EventEmitter: 'components/eventEmitter/EventEmitter',
                fence: 'components/fence/fence',
                lodash: 'components/lodash/lodash',
                picturefill: 'components/picturefill/picturefill',
                Promise: 'components/native-promise-only/npo.src',
                qwery: 'components/qwery/qwery',
                reqwest: 'components/reqwest/reqwest',
                FastClick: 'components/fastclick/fastclick',

                common: 'projects/common',
                tablet: 'projects/tablet',

                // plugins
                text: 'components/requirejs-text/text'
            },
            optimize: options.isDev ? 'none' : 'uglify2',
            generateSourceMaps: true,
            preserveLicenseComments: false,
            fileExclusionRegExp: /^bower_components$/,
            // fix typescript import path of bootstrap
            // renames requirejs path from 'projects/foo/bar' to 'foo/bar'
            onBuildRead: function (moduleName, path, contents) {
                if (moduleName.indexOf("bootstraps/") === 0) {
                    return contents.replace(/projects\//g, '');
                }
                return contents;
            }
        },
        common: {
            options: {
                dir: options.require_js.target,
                keepBuildDir: false,

                modules: [
                    {
                        name: 'core'
                    },
                    {
                        name: 'bootstraps/app',
                        exclude: [
                            'core'
                        ]
                    }
                ]
            }
        },
        tablet: {
            options: {
                name: 'bootstraps/appTablet',
                out: options.require_js.target + '/bootstraps/appTablet.js',
                exclude: [
                    'core',
                    'bootstraps/app'
                ]
            }
        }

    };
};
