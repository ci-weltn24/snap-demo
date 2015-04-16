/*
 Module: detect/detect.js                                                                                                 8
 Description: Used to detect various characteristics of the current browsing environment.
 */

define([], function () {
    'use strict';

    function getFontFormatSupport(ua) {
        ua = ua.toLowerCase();
        var browserSupportsWoff2 = false,
            // for now only Chrome 36+ supports WOFF 2.0.
            woff2browsers = /Chrome\/([0-9]+)/i,
            chromeVersion;

        if (woff2browsers.test(ua)) {
            chromeVersion = parseInt(woff2browsers.exec(ua)[1], 10);

            if (chromeVersion >= 36) {
                browserSupportsWoff2 = true;
            }
        }

        if (browserSupportsWoff2) {
            return 'woff2';
        }

        if (ua.indexOf('android') > -1) {
            return 'ttf';
        }

        return 'woff';
    }

    return {
        getFontFormatSupport: getFontFormatSupport
    };

});
