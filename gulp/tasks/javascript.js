var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('javascript:concat', function() {
    return gulp.src([
        './src/js/**/*.js',
        '!./src/js/modernizr/**/*'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(size())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('javascript:concat:watch', function() {
    return gulp.watch([
        'src/js/**/*.js',
        '!src/js/modernizr/**/*'
    ], ['javascript:concat']);
});

gulp.task('javascript:hint', function() {
    return gulp.src([
        './src/js/**/*.js',
        '!./src/js/modernizr/**/*'
    ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('javascript:hint:watch', function() {
    gulp.watch([
        'src/js/**/*.js',
        '!src/js/modernizr/**/*'
    ], ['javascript:hint']);
});

gulp.task('javascript:modernizr', function() {
    return gulp.src('./src/js/modernizr/**/*')
        .pipe(gulp.dest('./build/js'));
});

gulp.task('javascript:modernizr:watch', function() {
    gulp.watch('src/js/modernizr/**/*', ['javascript:modernizr']);
});
