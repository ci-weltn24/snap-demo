define([
    'bean',
    'common/utils/$',
    'bonzo',
    'tablet/api/NavigationManager'
], function (bean,
             $,
             bonzo,
             NavigationManager) {
    'use strict';

    var dataSelector = '[data-action="native-media-opener"]',
        navigationManager = new NavigationManager();

    function init() {
        /* jshint validthis: true */
        bean.on(document.body, 'click', dataSelector, function (e) {
            e.preventDefault();

            this.openMedia(e.currentTarget);
        }.bind(this));
    }

    function openMedia(currentTarget) {
        var $el = bonzo(currentTarget),
            mediaObject = {
                type: $el.attr('data-media-type'),
                mediaId: $el.attr('data-media-id'),
                bounds: getBoundingBoxString(currentTarget)
            };

        navigationManager.openMedia(mediaObject);
    }

    function getBoundingBoxString(element) {
        var position = bonzo(element).offset();
        return "{{" + Math.round(position.left) + "," + Math.round(position.top) + "},{" + position.width + "," + position.height + "}}";
    }

    return {
        init: init,
        openMedia: openMedia,
        getBoundingBoxString: getBoundingBoxString
    };
});
