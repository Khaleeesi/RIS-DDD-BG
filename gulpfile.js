var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Run everything
gulp.task('default');

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js');
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
});


