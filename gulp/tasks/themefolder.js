var gulp = require('gulp');

gulp.task('themefolder', function() {
    return gulp.src('./src/themefolder/**/*')
        .pipe(gulp.dest('./build'));
});

gulp.task('themefolder:watch', function() {
    return gulp.watch('src/themefolder/**/*', ['themefolder']);
});
