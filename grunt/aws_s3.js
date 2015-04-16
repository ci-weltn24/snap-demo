/**
 * grunt-aws-s3
 * https://github.com/MathieuLoutre/grunt-aws-s3
 */
module.exports = function(grunt, options) {
    return {
        options: {
            accessKeyId: process.env.AWS_KEY_ID,
            secretAccessKey: process.env.AWS_KEY,
            region: 'eu-central-1',
            uploadConcurrency: 5,
        },
        uploadSitespeedResults: {
            options: {
                bucket: 'sitespeed-results',
                access: 'bucket-owner-full-control'
            },
            files: [{
                expand: true,
                cwd: options.tmp + '/sitespeed-results',
                src: ['**'],
                dest: '/'
            }]
        }
    };
};
