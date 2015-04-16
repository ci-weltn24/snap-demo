/*
 Module: fonts.js
 Description: attempts to load webfonts over XMLHTTP, add them to the
 current page and then save them to `localStorage` for next time.
 */

define([
    'common/utils/$',
    'common/utils/ajax',
    'common/utils/config',
    'common/utils/detect',
    'common/utils/mediator',
    'common/utils/storage'
], function ($,
             ajax,
             config,
             detect,
             mediator,
             storage) {
    'use strict';

    var storagePrefix = 'fonts.',
        fileFormat = detect.getFontFormatSupport(navigator.userAgent);

    return {
        load: function () {
            // If any of the following conditions are met, we just leave it and
            // `return false`:
            // - fonts have been loaded asynchronously by injecting a `link`
            if ($('.webfonts').length) {
                return false;
            }

            // Make sure we will remember what format we want later.
            if (!storage.local.get(storagePrefix + 'format')) {
                storage.local.set(storagePrefix + 'format', fileFormat);
            }

            // Now we want to load them. Query the `style.webfont` elements
            // for each font's URI, if it's not already been loaded from `localStorage`.
            $('.webfont:not([data-loaded-from])').each(function (webfont) {
                var $webFont = $(webfont),
                    fontFile = $webFont.data('cache-file-' + fileFormat);

                // Request them. Once we've got them, we add the font data
                // to the page by injecting it into the relevent
                // `style.webfont` element, and save it to `localStorage`
                // for next time too.
                ajax({
                    url: fontFile,
                    type: 'jsonp',
                    jsonpCallbackName: 'jsonPCallback',
                    success: function (resp) {

                        // If the response is not good, go.
                        if (!resp) {
                            return;
                        }

                        // Handle the response.
                        var fontInfo = fontFile.match(/fonts\/([^/]*?)\/([^/]*?)\/?([^/]*)\.(woff2|woff|ttf).json$/),
                            fontHash = fontInfo[2],
                            fontName = fontInfo[3];

                        // Insert the css from the response into the style element on the page
                        $webFont.text(resp.css).attr('data-loaded-from', 'ajax');

                        // then clear out any old fonts
                        storage.local.clearByPrefix(storagePrefix + fontName);

                        // then save the new ones
                        storage.local.set(storagePrefix + fontName + '.' + fontHash, resp.css);

                        // and finally announce the new arrival.
                        mediator.emit('modules:fonts:loaded', name);
                    }
                });
            });
        }
    };
});
