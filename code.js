var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('./build/server/*.js')
	.pipe(correct_codify());

gulp.task('webserver', function() {
	connect.server({
		livereload: true
	})
});

gulp.task('default', ['webserver']);
