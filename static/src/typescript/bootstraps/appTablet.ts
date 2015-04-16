/// <reference path="../definitions.d.ts" />

// warning: path is a workaround: only for compiling
// the real path is replaced by requirejs grunt task
// this is ugly as fuck :(
import ArticlePageManager = require("projects/tablet/api/ArticlePageManager");
import NavigationManager = require("projects/tablet/api/NavigationManager");
import NativeMediaOpener = require("projects/tablet/NativeMediaOpener");
import Accordion = require("projects/common/modules/article/Accordion");

interface InitValues {
    "font-size"?: string;
}

interface InitOptions {
    init?: InitValues;
}

module appTablet {
    "use strict";

    export function initArticlePage(options?: InitOptions): void {
        if (options && options.init) {
            ArticlePageManager.setFontSize(options.init["font-size"]);
        }
    }

    export function bindArticlePageManager(): void {
        window.articlePageManager = ArticlePageManager;
    }

    export function initNativeMediaOpener(): void {
        NativeMediaOpener.init();
    }

    export function fireReadyEventToTablet(): void {
        NavigationManager.emitReady();
    }

    export function initAccordion(): void {
        Accordion.bootstrap();
    }

}

export function init(options?: Object): void {
    "use strict";

    appTablet.initArticlePage(options);
    appTablet.bindArticlePageManager();
    appTablet.initNativeMediaOpener();
    appTablet.initAccordion();
    appTablet.fireReadyEventToTablet();
}
