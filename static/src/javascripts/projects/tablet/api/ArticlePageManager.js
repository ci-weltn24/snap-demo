define(['tablet/font-resizer'], function (fontResizer) {
        'use strict';

        var ArticlePageManager = function () {
        };

        ArticlePageManager.prototype.setFontSize = function (fontSizeProfile) {
            fontResizer.setFontSize(fontSizeProfile);
        };

        ArticlePageManager.prototype.getFontSizeProfiles = function () {
            return fontResizer.getFontSizeProfiles();
        };

        return ArticlePageManager;
    }
);
