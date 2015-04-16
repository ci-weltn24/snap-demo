declare class RenderConfiguration {
    id: string;
    fixtures: string[]
}

declare class Fixtures {

    /**
     * removes an html component with the given id
     * @param id html id attr
     */
    static clean(id: string): void;


    static add(id: string, fixtures: string[]): bonzo;

    static render(conf: RenderConfiguration): bonzo;
}

declare module "fixtures" {
    export = Fixtures;
}

