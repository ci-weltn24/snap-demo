/// <reference path="../../../definitions.d.ts"/>

/*
 Common functions to simplify access to page data
 */

import _ = require("lodash");

var config: Config = _.extend({
    page: {},
    styleSheets: {}
}, funkotron.config);

export = config;
