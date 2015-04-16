module.exports = function(config) {
    'use strict';

    var settings = new require('./settings.js')(config);
    settings.files.push(
        { pattern: 'static/test/javascripts/spec/common/**/*.spec.js', included: false }
    );
    config.set(settings);
};
