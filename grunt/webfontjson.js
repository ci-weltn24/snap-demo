// Create JSON web font files from fonts. See https://github.com/ahume/grunt-webfontjson

module.exports = function (grunt, options) {
    'use strict';

    return {
        // FreigDisProBla
        FreigDisProBlaWoff: {
            options: {
                filename: options.fonts.target + 'Minecraft.woff.json',
                fonts: [
                    {
                        'font-family': '"FreigDisProBla"',
                        file: options.fonts.src + 'Minecraft.woff',
                        format: 'woff'
                    }
                ]
            }
        }
    };
};
