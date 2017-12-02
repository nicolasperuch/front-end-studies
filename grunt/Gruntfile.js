module.exports = function (grunt){

    grunt.initConfig({
        jshint: {
            dist: {
                src: ['calculator/*.js',
                      'hello-world/*.js'
                ]
            }
        },
        concat: {
            calculator: {
                src: ['calculator/*.js'],
                dest: 'concat/concatened-calculator.js'
            },
            helloworld: {
                src: ['hello-world/*.js'],
                dest: 'concat/concatened-hello-world.js'
            },
            all: {
                src: ['uglify/*.js'],
                dest: 'all.min.js'
            }

        },
        uglify: {
            calculator: {
                src: ['concat/concatened-calculator.js'],
                dest: 'uglify/calculator.min.js'
            },
            helloworld: {
                src: ['concat/concatened-hello-world.js'],
                dest: 'uglify/hello-world.min.js'
            }
        },
        clean: {
            temp: ['concat', 'uglify']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('play', ['jshint', 'concat:calculator', 'concat:helloworld', 'uglify', 'concat:all', 'clean'])
}