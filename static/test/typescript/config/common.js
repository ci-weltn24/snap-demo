module.exports = function (config) {
    'use strict';

    var settings = new require('./settings.js')(config);

    config.set(settings);
};
