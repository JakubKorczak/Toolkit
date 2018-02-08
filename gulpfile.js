var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
                .pipe(sourcemaps.init())
                .pipe(sass({
                  outputStyle: 'expanded',
                  sourceComments: 'map'
                }))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});
