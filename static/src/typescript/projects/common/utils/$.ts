/// <reference path="../../../definitions.d.ts"/>

import bonzo = require("bonzo");
import qwery = require("qwery");
import bean = require("bean");

function $(selector: string, context?: any): bonzo {
    "use strict";

    return bonzo(qwery(selector, context));
}

module $ {
    "use strict";

    export function create(html: string): bonzo {
        return bonzo(bonzo.create(html));
    }

    export function onAction(element: Object, actionName: string, eventFunction: Function, eventName?: string): bean {
        return bean.on(element, eventName || "click", "[data-js-action~='" + actionName + "']", eventFunction);
    }
}

export = $;
