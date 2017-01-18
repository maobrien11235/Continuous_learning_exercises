var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.src('./build/**/correct_code.js');

gulp.task('webserver', function() {
	connect.server({
		livereload: true
	})
});

gulp.task('default', ['webserver']);
