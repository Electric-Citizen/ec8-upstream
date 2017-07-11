'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('compass-importer');
var cssnano = require('gulp-cssnano');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var syncConfig = require('./syncConfig.json');


//Sass config, include paths to mixins
var sass_config = {
  includePaths: [
    'node_modules/breakpoint-sass/stylesheets/',
    'node_modules/singularitygs/stylesheets/',
    'node_modules/susy/sass/',
    'node_modules/modularscale-sass/stylesheets',
    'node_modules/compass-mixins/lib/'
  ]
};


//Define Workflow
gulp.task('workflow', function () {
  gulp.src('./src/sass/oc-base.styles.scss')
    
    //initial sourcemaps
    .pipe(sourcemaps.init())
    
    //glob
    .pipe(sassGlob())
    
    //run sass thru mixins and error logging
    .pipe(sass(sass_config).on('error', sass.logError))
    
    //autoprefix
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    
    //minify css
    //.pipe(cssnano())
    
    //write sourcemaps
    .pipe(sourcemaps.write('./'))

  //write CSS
  .pipe(gulp.dest('./css/'))
});


//Define BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init(syncConfig);
    gulp.watch("./src/sass/**/*.scss", ['workflow']);
    gulp.watch("./css/**/*.css").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});


//Default Default task
gulp.task('default', [ 'browser-sync']);
