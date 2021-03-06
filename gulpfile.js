var gulp = require('gulp');
var open = require('gulp-open');
var path = require('path');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var Paths = {
    HERE: './',
    DIST: 'dist/',
    CSS:  './assets/css/',
    SCSS_TOOLKIT_SOURCES: './assets/scss/*', // TODO: replace * with the proper file
    SCSS: './assets/scss/*'
};

// gulp tasks

gulp.task('compile-scss', function(){
    return gulp.src(Paths.SCSS_TOOLKIT_SOURCES).pipe(sourcemaps.init()).pipe(sass().on('error, sass.logError'))
    .pipe(autoprefixer()).pipe(sourcemaps.write(Paths.HERE)).pipe(gulp.dest(Paths.CSS));
});

gulp.task('open', function() {
    gulp.src('./index.html').pipe(open());
});

gulp.task('watch', function(){
    gulp.watch(Paths.SCSS, gulp.series('compile-scss'));
});

gulp.task('open-app', gulp.parallel('open', 'watch'));