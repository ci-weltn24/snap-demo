module.exports = function(grunt, options) {
    'use strict';

    return {
        options: {
            reporters: options.isDev ? ['dots'] : ['progress'],
            singleRun: options.singleRun,
            browserDisconnectTimeout: 10000,
            browserDisconnectTolerance: 3,
            browserNoActivityTimeout: 15000,
            reportSlowerThan: 1000
        },
        common: {
            configFile: options.testConfDir + 'common.js'
        },
        tablet: {
            configFile: options.testConfDir + 'tablet.js'
        },
        typescript: {
            configFile: options.typescript.test + '/config/common.js'
        }
    };
};
