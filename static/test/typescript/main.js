var tests = [];
for (var file in window.__karma__.files) {
    if (/.*\.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/static/.tmp/typescript/specs',
    paths: {
        bean: '/base/static/src/javascripts/components/bean/bean',
        bonzo: '/base/static/src/javascripts/components/bonzo/bonzo',
        EventEmitter: '/base/static/src/javascripts/components/eventEmitter/EventEmitter',
        fence: '/base/static/src/javascripts/components/fence/fence',
        lodash: '/base/static/src/javascripts/components/lodash/lodash',
        Promise: '/base/static/src/javascripts/components/native-promise-only/npo.src',
        qwery: '/base/static/src/javascripts/components/qwery/qwery',
        reqwest: '/base/static/src/javascripts/components/reqwest/reqwest',
        FastClick: '/base/static/src/javascripts/components/fastclick/fastclick',

        squire: '/base/static/test/typescript/components/squire/Squire',
        sinon: '/base/static/test/typescript/components/sinonjs/sinon',

        Injector: '/base/static/test/typescript/helpers/injector',
        fixtures: '/base/static/test/typescript/helpers/fixtures',
        common: 'projects/common',
        tablet: 'projects/tablet',

        // plugins
        text: '/base/static/test/typescript/components/requirejs-text/text'
    },
    shim: {}
});

require(['Promise', 'lodash'], function (Promise, _) {
    'use strict';

    require(tests, function () {
        Promise.all(_.toArray(arguments)).then(function () {
            window.__karma__.start();
        });
    });
});
