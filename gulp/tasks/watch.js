var gulp = require('gulp');

gulp.task('watch', [
    'themefolder:watch',
    'sass:watch',
    'javascript:concat:watch',
    'javascript:hint:watch',
    'javascript:modernizr:watch',
    'handlebars:watch',
    'images:watch',
    'fonts:watch'
]);
