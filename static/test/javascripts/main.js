var tests = [];
for (var file in window.__karma__.files) {
    if (/.*\.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/static/src/javascripts',
    paths: {
        common:       'projects/common',
        tablet:       'projects/tablet',
        bean:         'components/bean/bean',
        bonzo:        'components/bonzo/bonzo',
        EventEmitter: 'components/eventEmitter/EventEmitter',
        fence:        'components/fence/fence',
        lodash:       'components/lodash/lodash',
        Promise:      'components/native-promise-only/npo.src',
        qwery:        'components/qwery/qwery',
        raven:        'components/raven-js/raven',
        reqwest:      'components/reqwest/reqwest',
        squire:       '/base/static/test/javascripts/components/squire/Squire',
        fixtures:     '/base/static/test/javascripts/fixtures',
        helpers:      '/base/static/test/javascripts/helpers'
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
