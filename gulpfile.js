var gulp = require('gulp');
var sass = require('gulp-sass');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify_js', function() {
	gulp.src(['./js/hammer.js', './js/index.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(gp_rename('all.min.js'))
        .pipe(gp_uglify('./js/concat.js'))
        .pipe(gulp.dest('./js/min'));
});