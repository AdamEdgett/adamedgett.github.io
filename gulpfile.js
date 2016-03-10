var gulp = require('gulp');

var less = require('gulp-less');
var browserSync = require('browser-sync');

var paths = {
  less: 'less/*.less',
  html: '*.html'
};

gulp.task('less', function() {
  gulp.src([ 'less/main.less', 'less/404.less' ])
  .pipe(less({
    paths: [ 'less' ]
  }))
  .pipe(gulp.dest('stylesheets'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('compass', function() {
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
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.html, ['bs-reload']);
});

gulp.task('build', ['less']);
gulp.task('default', ['less', 'browser-sync', 'watch']);
