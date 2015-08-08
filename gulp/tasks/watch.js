var gulp = require('gulp');

gulp.task('watch', [
    'themefolder:watch',
    'modules:watch',
    'sass:watch',
    'javascript:concat:watch',
    'javascript:hint:watch',
    'javascript:modernizr:watch',
    'images:watch',
    'fonts:watch'
]);
