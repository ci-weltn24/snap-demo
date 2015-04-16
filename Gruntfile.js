'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    //
    // Build-options
    //

    var options = {
        isRuby: (grunt.option('ruby') !== undefined) ? Boolean(grunt.option('ruby')) : process.env.GRUNT_ISRUBY === '1',
        isDev: (grunt.option('dev') !== undefined) ? Boolean(grunt.option('dev')) : process.env.GRUNT_ISDEV === '1',
        app: {
            common: {
                conf: 'common/conf',
                public: 'common/public'
            }
        },
        hash: {
            mapFileName: 'assets.json',
            target: 'static/hash/' // need trailing slash for correct asset hashmap path
        },
        assets: {
            target: 'static/target/', // need trailing slash for correct asset hashmap path
            tmp: 'static/.tmp'
        },
        stylesheets: {
            src: 'static/src/stylesheets/',
            tmp: 'static/.tmp/stylesheets/',
            target: 'static/target/stylesheets/',
            devDist: 'common/public/stylesheets/'
        },
        // do not name this option 'requirejs': otherwise it will override settings on the task. w00t?
        require_js: {
            src: 'static/.tmp/javascripts',
            target: 'static/target/javascripts',
            devDist: 'common/public/javascripts'
        },
        javascripts: {
            src: 'static/src/javascripts/',
            test: 'static/test/javascripts',
            target: 'static/.tmp/javascripts/', // copied before requirejs
            devDist: 'common/public/javascripts'
        },
        typescript: {
            src: 'static/src/typescript',
            test: 'static/test/typescript',
            tmp: 'static/.tmp/typescript',
            target: 'static/.tmp/javascripts' // compiled before requirejs
        },
        styleguide: {
            src: 'docs/styleguide/assets/scss',
            target: 'docs/styleguide/assets/scss'
        },
        fonts: {
            src: 'static/src/fonts/',
            target: 'static/target/fonts/',
            devDist: 'common/public/fonts/'
        },
        images: {
            src: 'static/src/images/',
            target: 'static/target/images/',
            devDist: 'common/public/images/'
        },
        reports: 'target/test-reports',
        singleRun: grunt.option('single-run') !== false,
        testConfDir: 'static/test/javascripts/conf/',
        tmp: 'target/.tmp'
    };

    if (options.isDev) {
        grunt.log.subhead('Running Grunt in DEV mode');
    } else {
        grunt.log.subhead('Running Grunt in PROD mode');
    }

    //
    // Load config and plugins (using jit-grunt)
    //

    require('load-grunt-config')(grunt, {
        configPath: require('path').join(process.cwd(), 'grunt'),
        data: options, jitGrunt: {
            staticMappings: {
                'scsslint': 'grunt-scss-lint',
                'cssmetrics': 'grunt-css-metrics',
                px_to_rem: 'grunt-px-to-rem',
                grunticon: 'grunt-grunticon',
                assets_to_sass_variables: 'grunt/tasks/assets_to_sass_variables.js',
                sass: (options.isRuby) ? "grunt-contrib-sass" : "grunt-sass"
            }
        }
    });


    //
    // Tasks
    //

    grunt.registerTask('default', ['clean', 'validate', 'compile', 'copy', 'test:unit', 'analyse']);
    grunt.registerTask('build', ['default']); // just for gradle grunt plugin

    // Install:
    // - helper task
    // - postinstall after npm install (see package.json)c
    // - runtime dependencies (bower, typescript): css, js and typescript definitions
    grunt.registerTask('install:bower', ['shell:installBowerStylesheets', 'shell:installBowerJavascripts', 'shell:installBowerTypeScriptTest']);
    grunt.registerTask('install:typescript', ['tsd']);

    grunt.registerTask('install', ['install:bower', 'install:typescript']);

    // Compile:
    // - css (sass -> css) + minify
    // - js (requirejs build)
    // - fonts (fonts -> json)
    // - assets (hashing + asset map)
    grunt.registerTask('compile:css', function () {
        grunt.task.run(['sass:dist', 'px_to_rem', 'autoprefixer']);

        if (!options.isDev) {
            grunt.task.run(['cssmin', 'cssshrink']);
        }
    });
    grunt.registerTask('compile:assets', ['asset_hash', 'assets_to_sass_variables']);
    grunt.registerTask('compile:images', ['grunticon:svgIcons', 'copy:grunticon']);
    grunt.registerTask('compile:script', ['compile:script:typescript', 'compile:script:js']);
    grunt.registerTask('compile:script:typescript', ['ts:src']);
    grunt.registerTask('compile:script:js', ['copy:require_js', 'requirejs']);
    grunt.registerTask('compile:fonts', ['copy:fonts', 'webfontjson']);

    // compile images and fonts first because of generated scss files
    grunt.registerTask('compile', ['compile:images', 'compile:fonts', 'compile:assets', 'compile:css', 'compile:script', 'asset_hash']);

    // Validate:
    // - css (scss linter) needs ruby
    // - js (jshint)
    grunt.registerTask('validate:css', ['scsslint']);
    grunt.registerTask('validate:js', ['jshint', 'jscs']);
    grunt.registerTask('validate:typescript', ['tslint']);

    grunt.registerTask('validate', ['validate:css', 'validate:typescript']);

    // Analyse
    // - css metrics (file size, number of selectors, max rules)
    // - js bytesize
    // - sitespeed io
    grunt.registerTask('analyse:css', ['cssmetrics']);
    grunt.registerTask('analyse:js', ['bytesize']);
    grunt.registerTask('analyse:performance', ['sitespeedio:testOnly', "aws_s3"]);

    grunt.registerTask('analyse', ['analyse:css', 'analyse:js']);

    // Styleguide:
    grunt.registerTask('styleguide', ['compile:css', 'sass:styleguide', 'hologram']);

    // DEV Tasks
    grunt.registerTask('run', ['compile', 'copy', 'watch']);
    grunt.registerTask('run:css', ['compile', 'copy', 'watch:stylesheets']);
    grunt.registerTask('run:typescript', ['compile', 'copy', 'watch:typescript']);


    //
    // Test tasks
    //
    grunt.registerTask('test', ['test:unit']);
    grunt.registerTask('test:unit', ['ts:test', 'copy:fixtures', 'karma:typescript']);

    grunt.registerTask('coverage', function () {
        var target = this.args.length ? ':' + this.args.join(':') : '';
        grunt.config.set('karma.options.reporters',
            grunt.config.get('karma.options.reporters').concat('coverage')
        );
        grunt.config.set('karma.options.preprocessors',
            grunt.config.get('coverage.preprocessors')
        );
        grunt.task.run('test' + target);
    });

};
