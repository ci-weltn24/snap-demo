/// <reference path="../definitions.d.ts" />
/// <reference path="../definitions.specs.d.ts" />

import Injector = require("Injector");

var navigationManagerMock = {
        emitReady: sinon.spy()
    },
    nativeMediaOpenerMock = {
        init: sinon.spy()
    },
    articlePageManagerMock = {
        setFontSize: sinon.spy()
    };

var testSuite = new Injector()
    .mock("projects/tablet/api/ArticlePageManager", articlePageManagerMock)
    .mock("projects/tablet/api/NavigationManager", navigationManagerMock)
    .mock("projects/tablet/NativeMediaOpener", nativeMediaOpenerMock)
    .require(["bootstraps/appTablet"], function (appTablet) {

        describe("App Tablet", () => {

            it("should bind ArticlePageManager to window object", function () {
                appTablet.init();

                expect(window.articlePageManager).toBeDefined();
            });

            it("should init native media opener", function () {
                appTablet.init();

                expect(nativeMediaOpenerMock.init).toHaveBeenCalled();
            });

            it("should fire ready event to tablet app", function () {
                appTablet.init();

                expect(navigationManagerMock.emitReady).toHaveBeenCalled();
            });

            it("should set initial font-size when option is passed", function () {
                var options = {
                    "init": {
                        "font-size": "large"
                    }
                };

                appTablet.init(options);

                expect(articlePageManagerMock.setFontSize).toHaveBeenCalledWith("large");
            });

            it("should not set initial font-size when option is not passed", function () {
                var options = {
                    "foo": {
                        "bar": "small"
                    }
                };

                appTablet.init(options);

                expect(articlePageManagerMock.setFontSize).not.toHaveBeenCalledWith("small");
            });

        });

    });

export = testSuite;
