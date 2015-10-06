'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var paths = require('../paths');
var onError = require('../error');

gulp.task('styles', function() {
  return gulp.src(paths.SRC.styles + 'all.scss')
    .pipe(plumber({ errorHandler: onError.fancyError }))
    .pipe(sass({
      style: 'expanded',
      errLogToConsole: true
    }))
    .pipe(prefix({
      broswers: ['last 20 browsers'],
      cascade: false
    }))
    .pipe(gulp.dest( paths.DEST.styles ))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.DEST.styles))
});