/**
 * grunticon: grunt-grunticon
 *
 *  Outputs our SVG icons to CSS files in 3 formats: svg data urls, png data urls (IE9),
 *  and a third fallback CSS file with references to regular png images (<=IE8).
 */

module.exports = function (grunt, options) {
    'use strict';

    return {
        svgIcons: {
            files: [{
                expand: true,
                cwd: options.images.src + 'global/',
                src: ['*.svg'],
                dest: options.stylesheets.tmp + 'generated/icons/'
            }],
            options: {
                dynamicColorOnly: true,
                cssprefix: ".icon--",
                pngfolder: '../images/icons/',
                // Loader snippet is not needed,
                // so we are moving it to the tmp directory (must be relative to dest src).
                loadersnippet: '../../../grunticon-loader.js',
                datasvgcss: '_global-icons-data-svg.scss',
                datapngcss: '_global-icons-data-png.scss',
                urlpngcss: '_global-icons-fallback-png.scss',
                colors: {
                    bostonBlue: "#3e9bb9"
                }
            }
        }
    };
};
