var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watchify = require('watchify');
var reactify = require('reactify');
var rename = require("gulp-rename");
var connect = require('gulp-connect');
var assign = require('lodash.assign');

function bundleGenerator() {
	var opts = assign({}, watchify.args, {
		entries : './example/app.jsx',
		transform : [reactify],
	});
	var b = watchify(browserify(opts)); 
	var bundle = function() {
		return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		.pipe(gulp.dest('./example'))
		.pipe(connect.reload());
	};
	b.on('update', bundle); // on any dep update, runs the bundler
	b.on('log', gutil.log); // output build logs to terminal
	return bundle;
}

gulp.task('js', bundleGenerator());

gulp.task('default', ['js'], function() {
	connect.server({
		root : 'example',
		livereload : true,
		fallback : 'example/index.html',
	});
});
