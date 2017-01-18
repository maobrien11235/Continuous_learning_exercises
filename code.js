var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.src(incorrect_code());

gulp.task('webserver', function() {
	connect.server({
		livereload: true
	})
});

gulp.task('default', ['webserver']);
