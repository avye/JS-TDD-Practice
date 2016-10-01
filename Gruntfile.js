module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // ********** FOR ES5 **********
    // mochaTest: {
    //   test: {
    //     options: {
    //       reporter: 'spec'
    //     }
    //     src: ['ES5/spec/**/*.js']
    //   }
    // }

    // ********** FOR ES6 **********
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'babel-register'
        },
        src: ['ES6/**/*.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', [
    'mochaTest'
  ]);
}
