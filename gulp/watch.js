'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-filter']
});

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

// Only applies for fonts from app/fonts
//
gulp.task('fonts:serve', function () {
  return gulp.src([
    path.join(conf.paths.bower_components, '/font-awesome/fonts/*')
  ]).pipe($.filter('*.{eot,svg,ttf,woff,woff2}'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/fonts/')));
});

gulp.task('watch', ['inject', 'fonts:serve'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ], function (event) {
    if (isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function (event) {
    if (isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function (event) {
    browserSync.reload(event.path);
  });
});
