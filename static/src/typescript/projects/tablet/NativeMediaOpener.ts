/// <reference path="../../definitions.d.ts" />


import bean = require("bean");
import bonzo = require("bonzo");
import NavigationManager = require("tablet/api/NavigationManager");

module nativeMediaOpener {
    "use strict";

    var dataSelector: string = "[data-action='native-media-opener']";

    export function openMedia(currentTarget: any): void {
        var $el: bonzo = bonzo(currentTarget),
            mediaObject: MediaObject = {
                type: $el.attr("data-media-type"),
                mediaId: $el.attr("data-media-id"),
                bounds: nativeMediaOpener.getBoundingBoxString(currentTarget)
            };

        NavigationManager.openMedia(mediaObject);
    }

    export function getBoundingBoxString(element: Element): string {
        var position: any = bonzo(element).offset();
        return "{{" + Math.round(position.left) + "," + Math.round(position.top) + "},{" + position.width + "," + position.height + "}}";
    }

    export function init(): void {
        bean.on(document.body, "click", dataSelector, function (e: Event): void {
            e.preventDefault();

            nativeMediaOpener.openMedia(e.currentTarget);
        });
    }
}

export = nativeMediaOpener;
