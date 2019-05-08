const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", function() {
	return gulp.watch("scss/**/*.scss", function() {
		return (
			gulp
				.src("scss/style.scss")
				.pipe(sass()
					.on("error", sass.logError)
				)
				.pipe(gulp.dest("css"))
		);
	});
});
