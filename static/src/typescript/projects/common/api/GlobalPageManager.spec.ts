/// <reference path="../../../definitions.specs.d.ts" />

import Injector = require("Injector");

var mediatorMock = {
    emit: sinon.stub()
};

var testSuite = new Injector()
    .mock("common/utils/mediator", mediatorMock)
    .require(["common/api/GlobalPageManager", "common/Event"], function (globalPageManager, Event) {

        describe("Global Page Manager", () => {

            it("should trigger event when direct call", function () {
                globalPageManager.triggerAppReady();
                expect(mediatorMock.emit).toHaveBeenCalledWith(Event.APP_READY);
            });

            it("should trigger event when call from global window object", () => {
                window.globalPageManager.triggerAppReady();
                expect(mediatorMock.emit).toHaveBeenCalledWith(Event.APP_READY);
            });

        });

    });

export = testSuite;
