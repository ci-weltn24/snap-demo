/// <reference path="../../../definitions.specs.d.ts" />
/// <reference path="../../../definitions.d.ts" />
/// <reference path="./ArticlePageManager.ts" />

import ArticlePageManager = require("tablet/api/ArticlePageManager");
import $ = require("common/utils/$");

'use strict';

describe("Change the font-size", () => {

    beforeEach(() => {
        $("html").removeAttr("style");
    });

    it("should not change the font-size when profile not exists", () => {
        ArticlePageManager.setFontSize("foobar");

        expect($("html").attr("style")).toBe(null);
    });

    it("should change the font-size when profile exists", () => {
        ArticlePageManager.setFontSize("large");

        var styleAttribute = $("html").attr("style");
        expect(styleAttribute).toContain("font-size");
        expect(styleAttribute).toContain("120%");
    });

});
