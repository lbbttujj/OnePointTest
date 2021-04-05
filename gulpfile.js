
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 version']}),
        // cssnano()
    ];
    return gulp.src('./src/component/main_scene/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/component/main_scene/dest'));
});