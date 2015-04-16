/*
 Module: detect/detect.ts                                                                                                 8
 Description: Used to detect various characteristics of the current browsing environment.
 */

module detect {
    "use strict";

    export function getFontFormatSupport(userAgent: string): string {
        userAgent = userAgent.toLowerCase();
        var browserSupportsWoff2: boolean = false,
        // for now only Chrome 36+ supports WOFF 2.0.
            woff2browsers: RegExp = /Chrome\/([0-9]+)/i,
            chromeVersion: number;

        if (woff2browsers.test(userAgent)) {
            chromeVersion = parseInt(woff2browsers.exec(userAgent)[1], 10);

            if (chromeVersion >= 36) {
                browserSupportsWoff2 = true;
            }
        }

        if (browserSupportsWoff2) {
            return "woff2";
        }

        if (userAgent.indexOf("android") > -1) {
            return "ttf";
        }

        return "woff";
    }
}

export = detect;
