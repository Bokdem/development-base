'use strict'

var notify = require('gulp-notify');

module.exports = {
  fancyError: function(err) {
    notify.onError({
      title: 'Fail',
      subtitle: 'You are awesome! (but you made a mistake)',
      message: '<%= error.message %>',
      sound: 'Pop'
    })(err);
    this.emit('end');
  }
};