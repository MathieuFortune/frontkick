var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bower = require('gulp-bower'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;


// Paths
var path = {
  root: './',
  src: {
    sass: './src/sass/style.scss',
    globalSass: './src/sass/**/*.scss',
    js: './src/js/*.js',
  },
  dist: {
    css: './dist/css/*.css',
    cssDir: './dist/css/',
    js: './dist/js/*.js',
    jsDir: './dist/js/',
  },
  bowerDir: './bower_components' 
};


// Bower task
gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(path.bowerDir)) 
});

//Sass task
gulp.task('sass', function() {
    gulp.src(path.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(path.dist.cssDir));
});

//Minify CSS task
gulp.task('minify-css', function() {
    return gulp.src(path.src.sass)
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(path.dist.cssDir));
});

//Uglify JS
gulp.task('uglify', function() {
  return gulp.src(path.src.js)
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.dist.jsDir));
});

//Serve task
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
});

//Watch task
gulp.task('watch', ['serve'], function() {
    gulp.watch(path.src.globalSass, ['sass']);
    gulp.watch(path.src.js, ['uglify']);
    gulp.watch(['*.html', path.dist.css, path.dist.js]).on('change', reload);
});
