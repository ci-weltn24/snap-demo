define([
        'tablet/api/NavigationManager',
        'tablet/api/ArticlePageManager',
        'tablet/native-media-opener'
    ], function (NavigationManager,
                 ArticlePageManager,
                 nativeMediaOpener) {
        'use strict';

        var navigationManager = new NavigationManager(),
            articlePageManager = new ArticlePageManager(),
            modules = {
                bindArticlePageManager: function () {
                    window.articlePageManager = articlePageManager;
                },

                fireReadyEvent: function () {
                    navigationManager.emitReady();
                },

                initNativeMediaOpener: function () {
                    nativeMediaOpener.init();
                }

            },
            ready = function () {
                modules.bindArticlePageManager();
                modules.fireReadyEvent();
                modules.initNativeMediaOpener();
            };

        return {
            init: ready
        };
    }
);
