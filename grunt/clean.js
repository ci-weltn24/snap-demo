/**
 * Clean: grunt-contrib-clean
 *
 * Removes/cleans files/directories
 */
module.exports = function (grunt, options) {
    return {
        all: {
            files: [
                {
                    dot: true,
                    src: [
                        options.assets.tmp,
                        options.assets.target,
                        options.hash.target,
                        options.tmp,
                        'common/public',
                        'common/conf/assets'
                    ]
                }
            ]
        }
    };
};
