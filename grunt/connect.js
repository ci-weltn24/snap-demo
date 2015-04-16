/**
 * Connect: grunt-contrib-connect
 *
 * Start simple nodejs-server
 */
module.exports = function (grunt, options) {
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
    return {
        proxies: [
            {
                context: '/experten',
                host: 'localhost',
                port: 8080,
                https: false,
                changeOrigin: false
            }
        ],
        options: {
            port: 9000,
            // Change this to 'localhost' to deny access to the server from outside.
            hostname: '0.0.0.0',
            livereload: 35729
        },
        server: {
            options: {
                open: true,
                middleware: function (connect) {
                    return [
                        connect.static('build'), // for static assets: build/tmp/assets
                        connect.static('build/prototype') // static html files
                    ];
                }
            }
        },
        tomcat: {
            options: {
                open: true,
                base: [
                    options.prototype
                ],
                middleware: function (connect) {
                    return [
                        proxySnippet,
                        connect.static('build/tmp/assets')
                    ];
                }
            }
        },
        test: {
            options: {
                port: 9001,
                base: [
                    options.prototype,
                    'test'
                ]
            }
        },
        dist: {
            options: {
                base: options.dist
            }
        }
    };
};
