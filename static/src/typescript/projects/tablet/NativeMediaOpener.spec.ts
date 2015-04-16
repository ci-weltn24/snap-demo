/// <reference path="../../definitions.d.ts" />
/// <reference path="../../definitions.specs.d.ts" />

import bean = require("bean");
import $ = require("common/utils/$");
import Fixture = require("fixtures");
import nativeMediaOpener = require("tablet/NativeMediaOpener");

"use strict";

describe("Media opener module", function () {
    var fixtureConfigs = {
        image: {
            id: "absolute-image-element",
            dataAction: "native-media-opener",
            dataMediaType: "IMAGE",
            dataMediaId: "image-123",
            style: {
                top: 20,
                left: 40,
                width: 2048,
                height: 1000
            }
        },
        video: {
            id: "absolute-video-element",
            dataAction: "native-media-opener",
            dataMediaType: "VIDEO",
            dataMediaId: "video-123",
            style: {
                top: 100,
                left: 500,
                width: 1600,
                height: 900
            }
        },
        gallery: {
            id: "absolute-gallery-element",
            dataAction: "native-media-opener",
            dataMediaType: "GALLERY",
            dataMediaId: "gallery-123",
            style: {
                top: 200,
                left: 400,
                width: 1024,
                height: 768
            }
        }
    };

    /**
     * Helper method for creating a html representation of a media element
     */
    function createMediaElementHTML(fixtureConfigElement) {
        return '<a ' +
            '       id="' + fixtureConfigElement.id + '" ' +
            '       data-action="' + fixtureConfigElement.dataAction + '" ' +
            '       data-media-type="' + fixtureConfigElement.dataMediaType + '" ' +
            '       data-media-id="' + fixtureConfigElement.dataMediaId + '" ' +
            '       style = "position:absolute; ' +
            '           top:' + fixtureConfigElement.style.top + 'px; ' +
            '           left:' + fixtureConfigElement.style.left + 'px; ' +
            '           width:' + fixtureConfigElement.style.width + 'px; ' +
            '           height:' + fixtureConfigElement.style.height + 'px;"' +
            '></a>';
    }


    beforeEach(function () {
        Fixture.render({
            id: "media-fixtures",
            fixtures: [
                createMediaElementHTML(fixtureConfigs.image),
                createMediaElementHTML(fixtureConfigs.video),
                createMediaElementHTML(fixtureConfigs.gallery)
            ]
        });
    });

    afterEach(function () {
        Fixture.clean("media-fixtures");
    });


    describe("Image element", function () {
        it("should get the position and dimensions of the passed dom element and return them as a custom bounds string", function () {
            var expectedBoundingBoxString = "{{40,20},{2048,1000}}",  // {{xPosition, yPosition},{width,height}}"
                calculatedBoundingBoxString = nativeMediaOpener.getBoundingBoxString(document.getElementById(fixtureConfigs.image.id));

            expect(calculatedBoundingBoxString).toBe(expectedBoundingBoxString);
        });

        it("navigation manager should have been called after click on a image", function () {
            spyOn(nativeMediaOpener, "openMedia");

            nativeMediaOpener.init();
            bean.fire(document.getElementById(fixtureConfigs.image.id), "click");

            expect(nativeMediaOpener.openMedia).toHaveBeenCalled();
        });
    });


    describe("Video element", function () {
        it("should get the position and dimensions of the passed dom element and return them as a custom bounds string", function () {
            var expectedBoundingBoxString = "{{500,100},{1600,900}}",  // {{xPosition, yPosition},{width,height}}"
                calculatedBoundingBoxString = nativeMediaOpener.getBoundingBoxString(document.getElementById(fixtureConfigs.video.id));

            expect(calculatedBoundingBoxString).toBe(expectedBoundingBoxString);
        });

        it("navigation manager should have been called after click on a video", function () {
            spyOn(nativeMediaOpener, "openMedia");

            nativeMediaOpener.init();
            bean.fire(document.getElementById(fixtureConfigs.video.id), "click");

            expect(nativeMediaOpener.openMedia).toHaveBeenCalled();
        });
    });


    describe("Image gallery element", function () {
        it("should get the position and dimensions of the passed dom element and return them as a custom bounds string", function () {
            var expectedBoundingBoxString = "{{400,200},{1024,768}}",  // {{xPosition, yPosition},{width,height}}"
                calculatedBoundingBoxString = nativeMediaOpener.getBoundingBoxString(document.getElementById(fixtureConfigs.gallery.id));

            expect(calculatedBoundingBoxString).toBe(expectedBoundingBoxString);
        });

        it("navigation manager should have been called after click on a image gallery", function () {
            spyOn(nativeMediaOpener, "openMedia");

            nativeMediaOpener.init();
            bean.fire(document.getElementById(fixtureConfigs.gallery.id), "click");

            expect(nativeMediaOpener.openMedia).toHaveBeenCalled();
        });
    });

});

