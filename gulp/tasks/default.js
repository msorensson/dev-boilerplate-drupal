var gulp = require('gulp');

gulp.task('default', [
    'sass',
    'javascript:concat',
    'javascript:hint',
    'javascript:modernizr',
    'handlebars',
    'images',
    'fonts'
]);
