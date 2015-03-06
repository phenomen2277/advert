var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify_js', function() {
	gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js/min/'));
});