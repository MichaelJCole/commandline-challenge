'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

// Linting

gulp.task('jshint', function () {
  return gulp.src('*.js')
  .pipe(plugins.plumber())
  .pipe(plugins.jshint('.jshintrc'))
  .pipe(plugins.jshint.reporter('jshint-stylish'));
});

// Start dev server, watch files, and reload.
gulp.task('dev', ['default'], function() {
  gulp.watch('*.js', ['default']);
});

gulp.task('clear', function() { console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'); });

gulp.task('default', function() {
  return runSequence('clear', 'jshint');
});
