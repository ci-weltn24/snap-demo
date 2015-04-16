import $ = require("common/utils/$");
import _ = require("lodash");

"use strict";

module fontResizer {
    "use strict";

    var fontSizeProfiles: Object = {
        default: "100%",
        small: "80%",
        large: "120%",
        xlarge: "150%"
    };

    function isValidFontProfile(profile: string): boolean {
        return _.has(fontSizeProfiles, profile);
    }

    export function getFontSizeProfiles(): Object {
        return fontSizeProfiles;
    }

    export function setFontSize(fontSizeProfile: string): void {
        if (isValidFontProfile(fontSizeProfile)) {
            $("html").css({
                "font-size": fontSizeProfiles[fontSizeProfile]
            });
        }
    }
}

export = fontResizer;
