import detect = require("common/utils/detect");

"use strict";

describe("Font support", function () {

    var ttfUserAgents = [
        "Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) ..."
    ];

    var woffUserAgents = [
        "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/53",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/ ..."
    ];

    var woff2UserAgents = [
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2107.3 Safari/537.36",
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36"
    ];


    it("should default to WOFF format", function () {
        var ua = "an unknown user agent string";
        expect(detect.getFontFormatSupport(ua)).toBe("woff");
    });

    it("should detect WOFF and TTF support based on the user agent string", function () {

        ttfUserAgents.forEach(function (ua) {
            expect(detect.getFontFormatSupport(ua)).toBe("ttf");
        });

        woffUserAgents.forEach(function (ua) {
            expect(detect.getFontFormatSupport(ua)).toBe("woff");
        });

        woff2UserAgents.forEach(function (ua) {
            expect(detect.getFontFormatSupport(ua)).toBe("woff2");
        });

    });

});
