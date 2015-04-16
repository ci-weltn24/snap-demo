define([
    'reqwest',
    'common/utils/config',
    'common/utils/get-property'
], function (reqwest,
             config,
             getProperty) {
    'use strict';

    var ajaxHost = getProperty(config, 'page.ajaxUrl', '');

    function ajax(params) {
        // Url does not start with http(s), so prepend Ajax Host
        if (!params.url.match('^(https?:)?//')) {
            params.url = ajaxHost + params.url;
        }
        return reqwest(params);
    }

    ajax.setHost = function (host) {
        ajaxHost = host;
    };

    return ajax;

});
