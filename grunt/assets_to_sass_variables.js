module.exports = function (grunt, options) {
    'use strict';

    return {
        fonts: {
            options: {
                assetMapPath: options.hash.target + options.hash.mapFileName,
                styleSheetSrc: options.stylesheets.src + 'generated/',
                sassDestFilename: '_webfont-asset-variables.scss',
                filetypes: ['woff', 'woff2', 'ttf']
            }
        }
    };
};
