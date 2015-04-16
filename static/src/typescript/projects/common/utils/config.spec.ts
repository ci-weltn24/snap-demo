import config = require("common/utils/config");

"use strict";

describe("Config", function () {

    beforeEach(function () {
        config.page = {
            webTitle: "I am a title"
        };
    });

    it("should have 'webTitle' property", function () {
        expect(config.page.webTitle).toBeDefined();
        expect(config.page.webTitle).toEqual("I am a title");
    });

});
