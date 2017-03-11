'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
		copy : {
			dist : {
				files : [
					{
						expand : true,
						dest   : 'webserver/dist/',
						cwd    : 'src/static/',
						src    : [
							'**/*',
						]
					},
				]
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			css: {
				src: [
					'src/css/',
				],
				dest: 'webserver/dist/style.css',
			},
		},
		uglify: {
			app: {
				files: {
					'webserver/dist/app.js': ['src/js/*.js', 'src/js/**/*.js']
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['copy:dist','concat','uglify']);

};