/**
 * grunt-sitespeed
 */
module.exports = function(grunt, options) {
    return {
        perfBudget: {
            options: {
                urls: grunt.file.readJSON('static/test/sitespeed/'+(process.env.STAGE ? process.env.STAGE : 'DEVELOPMENT')+'.pages.json'),
                basicAuth: process.env.AUTH_USERNAME+':'+process.env.AUTH_PASSWORD,
                resultBaseDir: options.tmp+'/sitespeed-results',
                no: 2,
                skipTest: 'ycookiefree,longexpirehead,ycdn,avoidscalingimages',
                graphiteHost: 'ec2-52-28-17-228.eu-central-1.compute.amazonaws.com',
                graphitePort: 2003,
                graphiteNamespace: 'funkotron_aws_perf',
                wptKey: 'SecretApi',
                wptHost: 'ec2-54-93-88-78.eu-central-1.compute.amazonaws.com',
                wptConfig: {
                    location: 'EU-CENTRAL_wptdriver:Chrome',
                    timeout: 300,
                    video: false,
                    firstViewOnly: false
                },
                budget: {
                    wpt: {
                        render: '1000',
                        loadTime: '7000',
                        visualComplete: '20000',
                        bytesInDoc: '2000000'
                    },
                    rules: {
                        default: 50
                    }

                }

            }
        },
        testOnly: {
            options: {
                urls: grunt.file.readJSON('static/test/sitespeed/'+(process.env.STAGE ? process.env.STAGE : 'DEVELOPMENT')+'.pages.json'),
                basicAuth: process.env.AUTH_USERNAME+':'+process.env.AUTH_PASSWORD,
                resultBaseDir: options.tmp+'/sitespeed-results',
                no: 2,
                skipTest: 'ycookiefree,longexpirehead,ycdn,avoidscalingimages',
                graphiteHost: 'ec2-52-28-17-228.eu-central-1.compute.amazonaws.com',
                graphitePort: 2003,
                graphiteNamespace: 'funkotron_aws_perf',
                wptKey: 'SecretApi',
                wptHost: 'ec2-54-93-88-78.eu-central-1.compute.amazonaws.com',
                wptConfig: {
                    location: 'EU-CENTRAL_wptdriver:Chrome',
                    timeout: 300,//wait at most 5 minutes for the results
                    video: false,
                    firstViewOnly: false
                }

            }

        }
    };
};
