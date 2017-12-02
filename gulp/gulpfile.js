var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var eventStream = require('event-stream');

gulp.task('jshint', function(){
    return gulp.src(['calculator/*.js', 'hello-world/*.js'])
                .pipe(jshint())
                .pipe(jshint.reporter('default'));
});

gulp.task('concat-uglify', function(){
    return eventStream.merge([gulp.src('calculator/*.js'),
                              gulp.src('hello-world/*.js')])
                .pipe(uglify())
                .pipe(concat('finalFile.min.js'))
                .pipe(gulp.dest('./'))
});


gulp.task('play', ['jshint', 'concat-uglify'])