var gulp = require('gulp'),
    del = require('del');

gulp.task('themefolder:cleanup', function() {
    del([
        './build/**/*',
        '!./build/js',
        '!./build/css',
        '!./build/fonts',
        '!./build/img'
    ]);
});

gulp.task('themefolder', ['themefolder:cleanup'], function() {
    return gulp.src('./src/themefolder/**/*')
        .pipe(gulp.dest('./build'));
});

gulp.task('themefolder:watch', function() {
    return gulp.watch('src/themefolder/**/*', ['themefolder']);
});
