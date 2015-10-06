'use strict';
/* globals require */

var gulp = require('gulp');
// var browserSync = require('browser-sync'); //.reload
var browserSync = require('browser-sync').create();
var paths = require('../paths');

var defaultBrowser = defaultBrowser === undefined ? 'default' : defaultBrowser;

gulp.task('server', function() {
  browserSync.init({
    browser: defaultBrowser,
    server: {
      baseDir: paths.serve,
      directory: true
    },
    port: 8000,
    ui: {
      port: 8001
    }
  });
});