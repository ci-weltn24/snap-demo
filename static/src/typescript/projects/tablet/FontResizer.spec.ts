/// <reference path="../../definitions.d.ts" />
/// <reference path="../../definitions.specs.d.ts" />

import $ = require("common/utils/$");
import fontResizer = require("tablet/FontResizer");

"use strict";

describe('Change the font-size', function () {

    beforeEach(() => {
        $("html").removeAttr("style");
    });

    it('should not change the font-size when profile not exists', function () {
        fontResizer.setFontSize('foobar');

        expect($('html').attr('style')).toBe(null);
    });

    it('should change the font-size when profile exists', function () {
        fontResizer.setFontSize('large');

        var styleAttribute = $('html').attr('style');

        expect(styleAttribute).toContain('font-size');
        expect(styleAttribute).toContain('120%');
    });

    it('should return an object with all valid font-size profiles', function () {
        var fontSizeProfiles = fontResizer.getFontSizeProfiles();

        expect(fontSizeProfiles).toBeDefined();
    });

});
