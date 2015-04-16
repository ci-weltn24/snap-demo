/// <reference path="../../../definitions.d.ts"/>

import Event = require("common/Event");
import mediator = require("common/utils/mediator");

module GlobalPageManager {
    "use strict";

    export function triggerAppReady(options?: Object): void {
        mediator.emit(Event.APP_READY, options);
    }

}

window.globalPageManager = GlobalPageManager;

export = GlobalPageManager;

