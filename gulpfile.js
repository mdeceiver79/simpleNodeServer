var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');

gulp.task('copyStatic', function(){
  return gulp.src('src/static/**/*.*')
    .pipe(gulp.dest('webserver/dist/'))
});

gulp.task('minifyStyles', function() {
  return gulp.src('src/css/**/*')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.css', { newLine : ';' }))
    .pipe(gulp.dest('webserver/dist'));
});

gulp.task('minifyScripts', function (cb) {
  pump([
        gulp.src('src/js/**/*.js'),
        concat('app.js', { newLine : ';' }),
        uglify(),
        gulp.dest('webserver/dist/')
    ],
    cb
  );
});

gulp.task('build', [ 'copyStatic', 'minifyScripts', 'minifyStyles' ]);