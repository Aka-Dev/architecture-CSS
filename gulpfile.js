'use strict';

var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var spritesmith = require('gulp.spritesmith');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var psi = require('psi');

// SASS DIRECTORY
var scssDir = 'scss/**/*.scss';
// CSS DIRECTORY
var cssDir = 'css';
// SITE URL
var site = 'http://';
// KEY
var key = '';

// COMPILE SASS
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

// GENERATE SPRITE IMAGE
gulp.task('sprite', function() {
    gulp.src('img/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/icons/'));
    var spriteData = gulp.src('img/icons/*.png').pipe(spritesmith({
        imgName: '../img/sprite.png',
        cssName: '_sprite.scss',
        algorithm: 'top-down',
        padding: 15
    }));

    spriteData.img.pipe(gulp.dest('./img/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./scss/base/')); // output path for the CSS
});

// IMAGES OPTIMIZATIONS
gulp.task('imgmin', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));
});

gulp.task('mobile', function() {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function(data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
});

gulp.task('desktop', function() {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function(data) {
        console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
});

// gulp.task('default', ['mobile']);

// WATCH
gulp.task('watch', function() {
    gulp.watch(scssDir, ['imgmin', 'sprite', 'sass']);
});