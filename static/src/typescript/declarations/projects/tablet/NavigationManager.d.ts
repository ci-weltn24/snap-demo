interface MediaObject {
    type: string;
    mediaId: string;
    bounds: string;
}

interface NavigationManager {
    showTemplate(showTemplateCallback?: (error: string) => void): void;
    openMedia(mediaObject: MediaObject, openMediaCallback?: (error: string) => void): void;
}

declare module "navigationManager" {
    export = NavigationManager;
}
