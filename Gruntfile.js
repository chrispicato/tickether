module.exports = function(grunt) {

//config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    processhtml: {
      dist: {
        files: {
          'compiled/index.html': ['client/index.html']
        }
      }
    },

    shell: {
      options: {
        stderr: false
      },
      compile: {
        command: 'node ./node_modules/webpack/bin/webpack.js'
      },
      startDevServer: {
        command: 'nodemon server/server.js'
      }
    }
  });

//dependencies
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-processhtml');

//tasks
  grunt.registerTask('build', [
    'shell:compile',
    'processhtml'
  ]);

  grunt.registerTask('open', ['open:dev']);

  grunt.registerTask('startServer', ['shell:startDevServer']);

  grunt.registerTask('dev', ['build', 'startServer']);
};