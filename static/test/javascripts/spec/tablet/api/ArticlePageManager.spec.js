define(['tablet/api/ArticlePageManager'], function (ArticlePageManager) {
        'use strict';

        describe('should delegate font-size operations', function () {
            var articlePageManager;

            beforeEach(function() {
                articlePageManager = new ArticlePageManager();
            });

            it('should return font-size profiles', function () {
                var fontSizeProfiles = articlePageManager.getFontSizeProfiles();

                expect(fontSizeProfiles).toBeDefined();
            });

            it('should not thrown any exceptions when changed the font-size', function () {
                expect(articlePageManager.setFontSize.bind(null, 'large')).not.toThrow();
            });

        });

    }
);
