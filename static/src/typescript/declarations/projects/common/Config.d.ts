/* tslint:disable:no-unused-variable */

interface Page {
    buildNumber?: string;
    content?: Object;
    isDev?: boolean;
    pageId?: string;
    revisionNumber?: string;
    section?: string;
    webTitle?: string;

}

interface Config {
    page?: Page;
    stylesheets?: Object;
}

declare var config: Config;
