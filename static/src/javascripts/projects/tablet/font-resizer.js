define(['common/utils/$', 'common/utils/_'], function ($, _) {
        'use strict';

        var fontSizeProfiles = {
            default: '100%',
            small: '80%',
            large: '120%',
            xlarge: '150%'
        };

        function isValidFontProfile(profile) {
            return _.has(fontSizeProfiles, profile);
        }

        return {
            getFontSizeProfiles: function () {
                return fontSizeProfiles;
            },
            setFontSize: function (fontSizeProfile) {
                if (isValidFontProfile(fontSizeProfile)) {
                    $('html').css({
                        'font-size': fontSizeProfiles[fontSizeProfile]
                    });
                }
            }
        };
    }
);
