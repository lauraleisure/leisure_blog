var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');


// build all the JavaScript things
gulp.task('build-script', function () {
    var src = ['./public/reactjs/**/*.jsx',];
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                'env',
                'react'
            ]
        }))
        .pipe(gulp.dest('./public/build'));
});

gulp.task('js-watch', function () {
    gulp.watch('./public/reactjs/**/*.jsx', ['build-script']);
});

gulp.task('sass', function () {
    return gulp.src('./public/stylesheets/**/*.scss')
        .pipe(sass.sync().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});
gulp.task('sass-watch', function () {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});