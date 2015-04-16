interface qwery {
    (selector: string, context?: Element|qwery): Element;
    find(selector: string): qwery;
    find(element: Element): qwery;
}

declare module "qwery" {
    export = qwery;
}

declare var qwery: qwery;
