var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var rename = require("gulp-rename");
var connect = require('gulp-connect');

function bundleGenerator() {
	var opts = {
		entries : './example/app.jsx',
		transform : [reactify],
	};
	var b = browserify(opts);
	var bundle = function() {
		return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		// .pipe(uglify({
		// 	compress : true,
		// }))
		.pipe(gulp.dest('./example'));
	};
	return bundle;
}

gulp.task('js', bundleGenerator());

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'example',
		fallback : 'example/index.html',
	});
});
