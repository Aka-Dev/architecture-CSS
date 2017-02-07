'use strict';

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var requirejsOptimize = require('gulp-requirejs-optimize');

var scssDir = 'scss/**/*.scss';
var cssDir = 'css';

gulp.task('sass', function() {
    return gulp.src(scssDir)
        // .pipe(sassLint({
        //     options: {
        //         formatter: 'stylish',
        //         'merge-default-rules': false
        //     },
        //     // files: {
        //     //     ignore: '**/*.scss'
        //     // },
        //     rules: {
        //         'no-ids': 1,
        //         'no-mergeable-selectors': 0
        //     },
        // }))
        // .pipe(sassLint.format())
        // .pipe(sassLint.failOnError())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(cssDir));
});

gulp.task('sass:watch', function() {
    gulp.watch(scssDir, ['sass']);
});

gulp.task('scripts', function () {
    return gulp.src('js/modules/*.js')
        .pipe(requirejsOptimize())
        .pipe(gulp.dest('js'));
});