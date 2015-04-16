/// <reference path="../../../../definitions.d.ts" />

"use strict";

import $ = require("common/utils/$");
import bonzo = require("bonzo");

class Accordion {
    $openItem: bonzo;
    itemClassActive: string;
    parentElement: bonzo;

    static bootstrap(): number {
        var createdAccordions: number = 0;

        $("[data-module='Accordion']").each(function (): void {
            var $accordionElement: bonzo = $(this),
                accordion: Accordion = new Accordion($accordionElement);

            createdAccordions++;

            $.onAction(this, "Accordion.toggle", function (event: Event): void {
                // get parent <li> element which is one level above the clicked header element
                var listItem: Element = $(this).parent().get(0);
                accordion.toggle(bonzo(listItem));
                event.stopImmediatePropagation();
            });
        });

        return createdAccordions;
    }

    constructor($accordionElement: bonzo) {
        this.itemClassActive = $accordionElement.data("accordionItemClassActive");
        this.parentElement = $accordionElement;
    }

    toggle($item: bonzo): void {
        if (this.isOpen($item)) {
            this.close();
        } else {
            this.close();
            this.open($item);
        }
    }

    open($item: bonzo): void {
        this.$openItem = $item;
        this.toggleArrow($item);
    }

    close(): void {
        if (this.$openItem) {
            this.toggleArrow(this.$openItem);
            this.$openItem = null;
        }
    }

    toggleArrow($item: bonzo): void {
        $item.toggleClass(this.itemClassActive);
    }

    isOpen($item: bonzo): boolean {
        return $item.hasClass(this.itemClassActive);
    }

    findContent($item: bonzo): bonzo {
        return $("[data-accordion-content]", $item);
    }

}

export = Accordion;
