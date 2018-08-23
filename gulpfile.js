const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const sequence = require('gulp-sequence');

gulp.task('clean', () => gulp.src('./public/scripts/*.js', { read: false })
  .pipe(clean()));

gulp.task('bundle', () => gulp.src(['./node_modules/axios/dist/axios.js', './node_modules/vue/dist/vue.min.js'])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/scripts')));

gulp.task('default', sequence(['clean'], ['bundle']));
