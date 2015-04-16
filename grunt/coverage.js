module.exports = function () {
    "use strict";

    return {
        preprocessors: {
            'static/.tmp/typescript/**/!(*.spec.js)*.js': ['coverage']
        }
    };
};
