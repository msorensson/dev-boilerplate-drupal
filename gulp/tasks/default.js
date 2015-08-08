var gulp = require('gulp');

gulp.task('default', [
    'themefolder',
    'sass',
    'javascript:concat',
    'javascript:hint',
    'javascript:modernizr',
    'handlebars',
    'images',
    'fonts'
]);
