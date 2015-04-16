/// <reference path="../../../../definitions.d.ts" />
/// <reference path="../../../../definitions.specs.d.ts" />

import bean = require("bean");
import $ = require("common/utils/$");
import Fixture = require("fixtures");
import Accordion = require("common/modules/article/Accordion");
import accordionHtml = require('text!common/modules/article/AccordionFixture.html');

"use strict";

describe("Accordion module", function () {
    var fixturesConfig = {
            id: "accordion-fixture",
            fixtures: [accordionHtml]
        },
        $fixtureContainer,
        activeItemSelector = "accordion__item--is-open",
        createdAccordions = 0,
        accordion1Item1,
        accordion2Item1,
        accordion1Item1Header,
        accordion2Item1Header,
        accordion1Item1Content,
        accordion2Item1Content;

    beforeEach(function () {
        $fixtureContainer = Fixture.render(fixturesConfig);

        // create Accordion objects
        createdAccordions = Accordion.bootstrap();

        accordion1Item1 = document.getElementById("accordion-1-item-1");
        accordion2Item1 = document.getElementById("accordion-2-item-1");
        accordion1Item1Header = document.getElementById("accordion-1-item-1-header");
        accordion2Item1Header = document.getElementById("accordion-2-item-1-header");
        accordion1Item1Content = document.getElementById("accordion-1-item-1-content");
        accordion2Item1Content = document.getElementById("accordion-2-item-1-content");
    });

    afterEach(function () {
        Fixture.clean(fixturesConfig.id);
    });

    it("two accordion modules should be created after bootstrapping", function () {
        expect(createdAccordions).toBe(2);
    });

    it("accordion 1: first item should be opened after a click on the caption of it", function () {
        expect(accordion1Item1.classList.contains(activeItemSelector)).toBeFalsy();
        bean.fire(accordion1Item1Header, "click");
        expect(accordion1Item1.classList.contains(activeItemSelector)).toBeTruthy();
    });

    it("accordion 2: first item should be opened after a click on the caption of it", function () {
        expect(accordion2Item1.classList.contains(activeItemSelector)).toBeFalsy();
        bean.fire(accordion2Item1Header, "click");
        expect(accordion2Item1.classList.contains(activeItemSelector)).toBeTruthy();
    });

    it("only one item is opened after a click on the caption of the first item", function () {
        bean.fire(accordion1Item1Header, "click");
        expect(document.querySelectorAll("." + activeItemSelector).length).toBe(1);
    });

    it("accordion 1: first item should be closed after a click on the caption of it", function () {
        expect(accordion1Item1.classList.contains(activeItemSelector)).toBeFalsy();
        bean.fire(accordion1Item1Header, "click");
        bean.fire(accordion1Item1Header, "click");
        expect(accordion1Item1.classList.contains(activeItemSelector)).toBeFalsy();
    });

    it("accordion 1: first item should not be closed after a click on its description", function () {
        bean.fire(accordion1Item1Header, "click");
        bean.fire(accordion1Item1Content, "click");
        expect(accordion1Item1.classList.contains(activeItemSelector)).toBeTruthy();
    });

});
