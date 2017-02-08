'use strict';

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var spritesmith = require('gulp.spritesmith');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');


var scssDir = 'scss/**/*.scss';
var cssDir = 'css';

gulp.task('sass', function() {
    return gulp.src(scssDir)
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

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
    imgName: '../img/sprite.png',
    cssName: '_sprite.scss',
    algorithm: 'top-down',
    padding: 15
  }));

  spriteData.img.pipe(gulp.dest('./img/')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('./scss/base/')); // output path for the CSS
});

gulp.task('sass:watch', function() {
    gulp.watch(scssDir, ['sass']);
});