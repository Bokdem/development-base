'use strict';
/* globals require */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var glob = require('glob');
var path = require('path');
var paths = require('../paths');


// finds all index.js files inside scripts directory
// returns dirname of index.js directory (app/index.js, libs/index.js etc)
var scripts = glob.sync(paths.SRC.scripts +'**/index.js').map(function(dir){
  var dirs = path.dirname(dir).split('/');
  return dirs[dirs.length-1];
});


// creates a task based on all found dirnames
scripts.forEach(function(name){
  gulp.task('js-'+ name, function(){
    return gulp.src(paths.SRC.scripts + name +'/index.js')
      .pipe(plumber())
      .pipe(jshint())
      .pipe(concat(name +'.js'))
      // .pipe(gulp.dest( paths.DEST.scripts ))
      .pipe(browserify({
        transform: ['envify', 'uglifyify']
      }))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest( paths.DEST.scripts ));
  });
});


// creates task that runs all dynamically created script tasks
gulp.task('scripts', scripts.map(
  function(name){ 
    return 'js-'+ name; 
  })
);