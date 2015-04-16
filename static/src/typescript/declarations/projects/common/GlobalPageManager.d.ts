/// <reference path="../../../definitions.d.ts" />

interface GlobalPageManager {
    triggerAppReady(options?: Object): void;
}

declare module "GlobalPageManager" {
    export = GlobalPageManager;
}
