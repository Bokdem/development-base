'use strict';

// Base path
var src = 'project/';
var dest = 'httpdocs/';

module.exports = {

  serve: dest, // Serve path

  // EXPORT: 'export/',

  SRC: { // Source paths
    index: src,
    templates: src + 'templates/',
    styles: src + 'styles/',
    scripts: src + 'scripts/'
  },

  DEST: { // Destination paths
    index: dest,
    templates: dest,
    styles: dest + 'minifiedCSS/',
    scripts: dest + 'minifiedJS/'
  }
};