interface bonzo {
    (element?: Element|bonzo): bonzo;

    append(html: string): bonzo;
    appendTo(target: any): bonzo;
    attr(name: string): string;
    attr(name: string, value: string): bonzo;
    create(html: string): bonzo;
    css(properties: Object): bonzo;
    data(key: string, value: string): any;
    data(key: string): any;
    each(func: (elem: any) => any): bonzo;
    addClass(className: string): bonzo;
    addClass(classList: string[]): bonzo;
    toggleClass(className: string): bonzo;
    removeClass(className: string): bonzo;
    removeClass(classList: string[]): bonzo;
    hasClass(name: string): boolean;
    html(html: string): bonzo;
    offset(): { top: number; left: number; width: number; height: number; };
    remove(): bonzo;
    removeAttr(name: string): bonzo;
    text(text: string|number|boolean): bonzo;
    text(): bonzo;
    each(fn: Function): bonzo;
    parent(): bonzo;
    get(index: number): Element;
}

declare module "bonzo" {
    export = bonzo;
}

declare var bonzo: bonzo;
