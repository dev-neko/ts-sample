var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build::ts', function() {
  return browserify({
    entries: "./src/ts/app.ts"
  }).plugin('tsify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dest/js'));
});
