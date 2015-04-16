/// <reference path="../definitions.d.ts" />
/// <reference path="appTablet.ts" />

// warning: path is a workaround: only for compiling
// the real path is replaced by requirejs grunt task
// this is ugly as fuck :(
import mediator = require("projects/common/utils/mediator");
import FontLoader = require("projects/common/modules/ui/FontLoader");
import Event = require("projects/common/Event");
import FastClick = require("FastClick");

// TODO: write a test
/* tslint:disable:no-unused-expression */
module app {
    "use strict";

    export function initFastClick(): void {
        FastClick.attach(document.body);
    }

    export function loadFonts(): void {
        FontLoader.load();
    }

    mediator.once(Event.APP_READY, (options?: Object) => {
        require(["bootstraps/appTablet"], () => {
            var appTablet: any = require("bootstraps/appTablet");
            appTablet.init(options);
        });
    });
}

export function init(): void {
    "use strict";

    app.loadFonts();
    app.initFastClick();
}
