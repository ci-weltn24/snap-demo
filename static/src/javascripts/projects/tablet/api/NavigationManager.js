define([], function () {
        'use strict';

        var NavigationManager = function () {
            this.navigationManagerAvailable = 'navigationManager' in window;
        };

        NavigationManager.prototype.emitReady = function () {
            if (this.navigationManagerAvailable) {
                window.navigationManager.showTemplate(function (error) {
                    console.error('Error in navigationManager.showTemplate: %o', error);
                });
            }
        };

        NavigationManager.prototype.openMedia = function (mediaObject) {
            if (this.navigationManagerAvailable) {
                window.navigationManager.openMedia(mediaObject, function (error) {
                    console.error('Error in navigationManager.openMedia: %o', error);
                });
            }
        };

        return NavigationManager;
    }
);
