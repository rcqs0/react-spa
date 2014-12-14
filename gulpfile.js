var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var concat = require('gulp-concat');

gulp.task('vendor', function() {
    gulp.src('./lib/*.js')
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./_public/assets/js'))
});

gulp.task('bundle', function(){
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./scripts/view.js');
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('_public/assets/js'));
});

gulp.task('watch', function() {
    gulp.watch('./lib/*.js', ['vendor']);
    gulp.watch('./scripts/view.js', ['bundle']);
    gulp.watch('./scripts/components/*.jsx', ['bundle']);
});

gulp.task('default', ['vendor', 'bundle', 'watch']);