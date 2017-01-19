var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('./bad_link/missing_subdr/*.js')
	.pipe(poor_codify())
	.pipe(dont_want_this());

gulp.task('webserver', function() {
	connect.server({
		livereload: true
	})
});

gulp.task('default', ['webserver']);
