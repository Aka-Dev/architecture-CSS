'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// AUTOPREFIXER
gulp.task('autoprefixer', function () {
    return gulp.src([
            'css/style.css',
            'css/home.css'
        ])
        .pipe(autoprefixer({
            browsers: ["> 1%", "last 2 versions", "ie 10"],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
});