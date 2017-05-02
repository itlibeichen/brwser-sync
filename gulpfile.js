/**
 * Created by Administrator on 2017/5/2.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ["browser-sync"]);