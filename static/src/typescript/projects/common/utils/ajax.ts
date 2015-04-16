import reqwest = require("reqwest");
import config = require("common/utils/config");
import getProperty = require("common/utils/getProperty");

var ajaxHost: string = <string>getProperty(config, "page.ajaxUrl", "");

function ajax(params: ReqwestParam): reqwest {
    "use strict";

    // url does not start with http(s), so prepend ajax host
    if (!params.url.match("^(https?:)?//")) {
        params.url = ajaxHost + params.url;
    }
    return reqwest(params);
}

module ajax {
    "use strict";

    export function setHost(host: string): void {
        ajaxHost = host;
    }
}

export = ajax;
