declare class Injector {
    constructor();

    mock(...any): Injector;
    store(...any): Injector;
    require(...any): Injector;
}

declare module "Injector" {
    export = Injector;
}
