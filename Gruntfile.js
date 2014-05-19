module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'out/css/fonts',
        destCss: 'out/css',
        options: {
          htmlDemo: false
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      icons: {
        files: '<%= webfont.icons.src %>',
        tasks: 'newer:webfont',
        options: {
          atBegin: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Note that ttfautohint for grunt-webfont is optional, but your generated font will not be properly hinted if it’s not installed:
  // OS X:
  // brew install fontforge ttfautohint
  //
  // Linux:
  // sudo apt-get install fontforge ttfautohint
  //
  // (https://github.com/sapegin/grunt-webfont/)
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-newer');

  // Default task
  grunt.registerTask('default', 'newer:webfont'.split(' '));

};