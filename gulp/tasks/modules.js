var gulp = require('gulp'),
    del = require('del');

gulp.task('modules:cleanup', function() {
    del('./build-modules/**/*');
});

gulp.task('modules', ['modules:cleanup'], function() {
    return gulp.src('./src/site-modules/**/*')
        .pipe(gulp.dest('./build-modules'));
});

gulp.task('modules:watch', function() {
    return gulp.watch('src/site-modules/**/*', ['modules']);
});
