"use strict";

module NavigationManager {
    "use strict";

    var navigationManagerAvailable: boolean = "navigationManager" in window;

    /**
     * Fires the ready event to the tablet app.
     */
    export function emitReady(): void {
        if (navigationManagerAvailable) {
            window.navigationManager.showTemplate((error: string) => {
                console.error("Error in navigationManager.showTemplate: %o", error);
            });
        }
    }

    /**
     * Native call to open a media element (gallery, video, picture)
     */
    export function openMedia(mediaObject: MediaObject): void {
        if (navigationManagerAvailable) {
            window.navigationManager.openMedia(mediaObject, (error: string) => {
                console.error("Error in navigationManager.openMedia: %o", error);
            });
        }
    }
}

export = NavigationManager;
