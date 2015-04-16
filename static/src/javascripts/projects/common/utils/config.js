/*global funkotron:false */

/*
 Common functions to simplify access to page data
 */
define([
    'common/utils/_'
], function (_) {
    'use strict';

    var config = funkotron.config;

    return _.extend({}, config);

});
