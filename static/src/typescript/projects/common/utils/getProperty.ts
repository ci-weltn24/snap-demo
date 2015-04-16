import _ = require("lodash");

function getProperty(object: Object, property: string, defaultValue?: string): string|boolean {
    "use strict";

    var value: any = _.reduce(property.split("."), function (object: Object, property: string): any {
        return _.has(object, property) ? object[property] : undefined;
    }, object);

    return value !== undefined ? value : (defaultValue !== undefined) ? defaultValue : false;
}

export = getProperty;
