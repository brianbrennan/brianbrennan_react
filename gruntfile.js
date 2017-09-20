module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    const webpackConfig = require('./webpack.config');

    grunt.initConfig({

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')
                ]
            },
            dist: {
                src: 'dist/*.css'
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/styles.css': 'app/globals/scss/styles.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: './app/**/*.scss',
                tasks: ['sass:dist']
            },
            webpack: {
                files: ['./app/**/*.jsx', './app/**/*.js'],
                tasks: ['webpack:dist']
            }
        },
        webpack: {
            dist: webpackConfig
        }
    });

    grunt.registerTask('build', ['webpack:dist', 'sass:dist', 'postcss:dist']);
    grunt.registerTask('devWatch', ['webpack:dist', 'sass:dist', 'postcss:dist', 'watch'])
};