/// <reference path="../../../definitions.d.ts" />

import _ = require("lodash");
import $ = require("common/utils/$");

module ArticlePageManager {
    "use strict";

    var fontSizeProfiles: {[profile: string]: string} = {
        "default": "100%",
        "small": "80%",
        "large": "120%",
        "xlarge": "150%"
    };

    function isValidFontProfile(fontProfile: string): boolean {
        "use strict";

        return _.has(fontSizeProfiles, fontProfile);
    }

    export function setFontSize(fontSizeProfile: string): void {
        if (isValidFontProfile(fontSizeProfile)) {
            $("html").css({
                "font-size": fontSizeProfiles[fontSizeProfile]
            });
        }
    }
}

export = ArticlePageManager;
