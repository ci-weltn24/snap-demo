interface ReqwestParam {
    url: string;
    method?: string;
    type?: string;
    contentType?: string;
    crossOrigin?: boolean;
    jsonpCallback?: string;
    success?: (...args: any[]) => any;
    error?: (...args: any[]) => any;
    complete?: (...args: any[]) => any;
}

interface reqwest {
    (parameters: ReqwestParam): reqwest;

    ajax(parameters: ReqwestParam): reqwest;
    then?: (...args: any[]) => any;
}

declare module "reqwest" {
    export = reqwest;
}

declare var reqwest: reqwest;
