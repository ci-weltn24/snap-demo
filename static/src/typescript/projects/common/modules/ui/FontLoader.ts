/// <reference path="../../../../definitions.d.ts" />

/**
 * Attempts to load webfonts over XMLHTTP, add them to the
 * current page and then save them to `localStorage` for next time.
 */

import $ = require("common/utils/$");
import ajax = require("common/utils/ajax");
import detect = require("common/utils/detect");
import mediator = require("common/utils/mediator");
import storage = require("common/utils/storage");

interface WebfontJsonResponse {
    css: string;
}

module fontLoader {
    "use strict";

    var storagePrefix: string = "fonts.";

    export function load(): void {
        var supportedFileFormat: string = detect.getFontFormatSupport(navigator.userAgent);

        // If any of the following conditions are met, we just leave it and return:
        // - fonts have been loaded asynchronously by injecting a `link`
        if ($(".webfonts").length) {
            return;
        }

        // Make sure we will remember what format we want later.
        if (!storage.local.get(storagePrefix + "format")) {
            storage.local.set(storagePrefix + "format", supportedFileFormat);
        }

        // Now we want to load them. Query the `style.webfont` elements
        // for each font"s URI, if it"s not already been loaded from `localStorage`.
        $(".webfont:not([data-loaded-from])").each(function (webfont: string): void {
            var $webFont: bonzo = $(webfont),
                fontFile: string = $webFont.data("cache-file-" + supportedFileFormat);

            // Request them. Once we"ve got them, we add the font data
            // to the page by injecting it into the relevent
            // `style.webfont` element, and save it to `localStorage`
            // for next time too.
            ajax({
                url: fontFile,
                type: "html",
                success: function (resp: string): void {
                    // If the response is not good, go.
                    if (!resp) {
                        return;
                    }

                    // TODO: must be removed/changed after webfontjson-grunt-task has been changed
                    var cleanedResponse: string = resp.replace("webfontjsonCallback(", "").slice(0, -2),
                        jsonResponse: WebfontJsonResponse = JSON.parse(cleanedResponse);

                    // Handle the response.
                    var fontInfo: string[] = fontFile.match(/fonts\/([^/]*?)\/([^/]*?)\/?([^/]*)\.(woff2|woff|ttf).json$/),
                        fontHash: string = fontInfo[2],
                        fontName: string = fontInfo[3];

                    // Insert the css from the response into the style element on the page
                    $webFont.text(jsonResponse.css).attr("data-loaded-from", "ajax");

                    // then clear out any old fonts
                    storage.local.clearByPrefix(storagePrefix + fontName);

                    // then save the new ones
                    storage.local.set(storagePrefix + fontName + "." + fontHash, jsonResponse.css);

                    // and finally announce the new arrival.
                    mediator.emit("modules:fonts:loaded", name);
                }
            });
        });
    }
}

export = fontLoader;
