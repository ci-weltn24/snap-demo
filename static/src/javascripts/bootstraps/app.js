define([
    'common/modules/ui/fonts'
], function (fonts) {
    'use strict';

    var modules = {
            loadFonts: function () {
                fonts.load();
            },
            loadTablet: function () {
                require(['bootstraps/app-tablet'], function (appTablet) {
                    appTablet.init();
                });
            }
        },

        ready = function () {
            modules.loadFonts();
            modules.loadTablet();
        };

    return {
        init: ready
    };
});
