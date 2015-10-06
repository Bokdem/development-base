'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('./paths');

// Tasks
require('require-dir')('./tasks');

// Watch
gulp.task('watch', function() {
  gulp.watch( path.SRC.templates + '**/*.jade', ['templates']);
  gulp.watch( path.SRC.styles + '**/*.{scss, sass}', ['styles']);
  gulp.watch( path.SRC.scripts + 'app/**/*.js', ['js-app']);
  gulp.watch( path.SRC.scripts + 'libs/**/*.js', ['js-libs']);
  // gulp.watch( path.SRC.images + '**/*', ['images']);
});

// Build
gulp.task('build', function() {
  gutil.log(gutil.colors.green('Building project'));
  gutil.beep();
  gulp.start('styles', 'scripts', 'templates');
});

// Serve task
gulp.task('serve', ['server', 'watch']);

//Default task
gulp.task('default', ['build'], function() {
  gulp.start('serve');
});