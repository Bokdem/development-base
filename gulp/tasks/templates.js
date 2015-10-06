'use strict';
/* globals require */

var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var paths = require('../paths');


gulp.task('templates', function(){
  return gulp.src([
      paths.SRC.templates +'pages/**/*.jade'
      // paths.SRC.templates +'components/**/*.jade'
    ], { base: paths.SRC.templates })
    .pipe(plumber())
    .pipe(jade({
      pretty: true,
      locals: {
        CSS_URL: paths.DEST.styles.replace('httpdocs', ''),
        JS_URL: paths.DEST.scripts.replace('httpdocs', ''),
        // IMAGES_URL: paths.DEST.images.replace('httpdocs', '')
      }
    }))
    .pipe(gulp.dest(paths.DEST.templates))
});
