/**
 * copy: grunt-contrib-copy
 */
module.exports = function (grunt, options) {
    'use strict';

    return {
        require_js: {
            files: [
                // compiled typescript
                {
                    expand: true,
                    cwd: options.typescript.target,
                    dest: options.require_js.src,
                    src: ['**/*.js', '**/*.js.map']
                },
                // raw js vendor scripts
                {
                    expand: true,
                    cwd: options.javascripts.src,
                    dest: options.require_js.src,
                    src: ['components/**/*.js', 'components/**/*.js.map']
                }
            ]
        },
        fixtures: {
            files: [{
                expand: true,
                cwd: options.typescript.src,
                dest: options.typescript.tmp + '/specs',
                src: ['**/*.html']
            }]
        },
        javascripts: {
            files: [
                {
                    expand: true,
                    cwd: options.hash.target + '/javascripts',
                    dest: options.javascripts.devDist,
                    src: ['**/*.js', '**/*.js.map']
                },
                {
                    expand: true,
                    cwd: options.require_js.target,
                    dest: options.javascripts.devDist,
                    src: ['**/*.js', '**/*.js.map']
                }
            ]
        },
        stylesheets: {
            files: [
                {
                    expand: true,
                    cwd: options.hash.target + '/stylesheets',
                    dest: options.stylesheets.devDist,
                    src: ['**/*.css']
                },
                {
                    expand: true,
                    cwd: options.stylesheets.target,
                    dest: options.stylesheets.devDist,
                    src: ['**/*.css']
                }
            ]
        },
        fonts: {
            files: [
                {
                    expand: true,
                    cwd: options.hash.target + '/fonts',
                    dest: options.fonts.devDist,
                    src: ['**/*.json', '**/*.woff2', '**/*.woff', '**/*.ttf']
                },
                {
                    expand: true,
                    cwd: options.fonts.src,
                    dest: options.fonts.target,
                    src: ['**/*.woff2', '**/*.woff', '**/*.ttf']
                }
            ]
        },
        grunticon: {
            files: [
                {
                    expand: true,
                    cwd: options.stylesheets.tmp + '/generated/icons',
                    dest: options.stylesheets.src + '/generated/icons',
                    src: ['**/*.scss']
                },
                {
                    expand: true,
                    cwd: options.images.target + '/icons',
                    dest: options.images.devDist + '/icons',
                    src: ['**/*.png']
                }
            ]
        },
        assetMap: {
            files: [{
                expand: true,
                cwd: options.hash.target,
                src: [options.hash.mapFileName],
                dest: options.app.common.conf + '/assets'
            }]
        },
        headJs: {
            files: [{
                expand: true,
                cwd: options.javascripts.src + '/components/curl',
                src: ['curl-domReady.js'],
                dest: options.app.common.conf + '/assets'
            }]
        }
    };
};
