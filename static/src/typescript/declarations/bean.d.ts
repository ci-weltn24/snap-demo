interface bean {
    on(element: Object, event: string, selector: string, handler: any): bean;
    fire(element: Object, event: string): any;
}

declare module "bean" {
    export = bean;
}

declare var bean: bean;
