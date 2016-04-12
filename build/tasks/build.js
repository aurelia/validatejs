var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var through2 = require('through2');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var tools = require('aurelia-tools');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var jsName = paths.packageName + '.js';

gulp.task('build-es2015', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.es2015())))
    .pipe(gulp.dest(paths.output + 'es2015'));
});

gulp.task('build-commonjs', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.amd())))
    .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
  return gulp.src(paths.source)
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-sample', ['build-sample-html'], function () {
  return gulp.src(paths.sample + '/src/**/*.js')
    .pipe(to5(assign({}, compilerOptions.amd())))
    .pipe(gulp.dest(paths.sample + '/dist'));
});
gulp.task('build-sample-html', function () {
  return gulp.src(paths.sample + '/src/**/*.html')
    .pipe(gulp.dest(paths.sample + '/dist'));
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-es2015', 'build-commonjs', 'build-amd', 'build-system'],
    callback
  );
});
