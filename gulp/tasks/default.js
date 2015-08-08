var gulp = require('gulp');

gulp.task('default', [
    'themefolder',
    'modules',
    'sass',
    'javascript:concat',
    'javascript:hint',
    'javascript:modernizr',
    'images',
    'fonts'
]);
