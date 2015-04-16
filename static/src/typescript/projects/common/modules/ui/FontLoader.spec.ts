/// <reference path="../../../../definitions.specs.d.ts" />
/// <reference path="../../../../definitions.d.ts" />

import Injector = require("Injector");
import $ = require("common/utils/$");

/**
 * The store method allows us to get a pointer bdddffack to a dependency so we can stub it.
 * mocks.store['common/utils/mediator'] is the fontLoaders dependency, we can
 * manipulate it or stub it with Sinon now.
 *
 */

var testSuite = new Injector()
    .store([
        "common/utils/mediator",
        "common/utils/detect"
    ])
    .require(["common/modules/ui/FontLoader", "mocks"], function (fontLoader, mocks) {

        describe("Font Loader", () => {

            var $webfontsHtml,
                server;

            beforeEach(() => {
                mocks.store["common/utils/detect"].getFontFormatSupport = function () {
                    return "ttf";
                };

                $webfontsHtml = $.create("<style class='webfont' " +
                "data-cache-file-ttf='/static/fonts/freight/hash/font.ttf.json' " +
                "data-cache-file-woff='/static/fonts/freight/hash/font.woff.json' " +
                "data-cache-file-woff2='/static/fonts/freight/hash/font.woff2.json'></style>");

                $('body').append($webfontsHtml);

                // set up fake server
                server = sinon.fakeServer.create();
                server.autoRespond = true;
            });

            afterEach(() => {
                $("body").html("");
                $webfontsHtml = null;

                server.restore();
            });

            it("should trigger event when fonts have been loaded", (done) => {
                server.respondWith("GET", "/static/fonts/freight/hash/font.ttf.json",
                    [200, {"Content-Type": "text/html"},
                        'webfontjsonCallback({"css":"@font-face{font-family:\\"FontName\\";src:url(data:application/x-font-ttf;base64,ABC);}"});'
                    ]);

                mocks.store["common/utils/mediator"].once("modules:fonts:loaded", () => {
                    $(".webfont").each(function (webfont: string): void {
                        var $webFont: bonzo = $(webfont);
                        expect($webFont.attr("data-loaded-from")).toEqual("ajax");
                        expect($webFont.text()).toEqual("@font-face{font-family:\"FontName\";src:url(data:application/x-font-ttf;base64,ABC);}");
                    });
                    done();
                });

                //spyOn(detect, 'getFontFormatSupport').and.returnValue('ttf');
                fontLoader.load();
            });

        });

    });

export = testSuite;
