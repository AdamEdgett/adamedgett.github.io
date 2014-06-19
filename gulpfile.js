var gulp = require('gulp');

var compass = require('gulp-compass');
var browserSync = require('browser-sync');

var paths = {
  sass: 'sass/*.scss',
  html: '*.html'
};

gulp.task('compass', function() {
  //gulp.src('./sass/*.scss')
  gulp.src(paths.sass)
  .pipe(compass({
    css: 'stylesheets',
    sass: 'sass'
  }))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function() {
  gulp.src(paths.html)
  .pipe(browserSync.reload({stream:true}));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['compass']);
  gulp.watch(paths.html, ['bs-reload']);
});

gulp.task('default', ['watch', 'compass', 'browser-sync']);
