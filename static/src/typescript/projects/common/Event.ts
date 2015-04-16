/// <reference path="../../definitions.d.ts"/>

/**
 * Named events for mediator.ts
 *
 * info: until TypeScript 1.4 enum strings are not allowed:
 * http://stackoverflow.com/questions/15490560/create-an-enum-with-string-values-in-typescript
 */
class Event {
    static APP_READY: string = "GlobalPageManager:appReady"
}

export = Event;
