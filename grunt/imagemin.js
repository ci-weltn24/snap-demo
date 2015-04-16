/**
 * imagemin: grunt-contrib-imagemin
 *
 * Minify images.
 */
module.exports = function (grunt, options) {
    return {
        //dist: {
        //    files: [
        //        {
        //            expand: true,
        //            cwd: options.src.images,
        //            src: '{,*/}*.{jpg,jpeg}', // we don't optimize PNG files as it doesn't work on Linux. If you are not on Linux, feel free to use '{,*/}*.{png,jpg,jpeg}'
        //            dest: options.dist + '/images'
        //        }
        //    ]
        //},
        //server: {
        //    files: [
        //        {
        //            expand: true,
        //            cwd: options.src.images,
        //            src: '{,*/}*.{jpg,jpeg}', // we don't optimize PNG files as it doesn't work on Linux. If you are not on Linux, feel free to use '{,*/}*.{png,jpg,jpeg}'
        //            dest: options.tmp + '/images'
        //        }
        //    ]
        //}
    };
};
