const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Paths for SCSS files
const paths = {
  // scss: 'src/**/*.scss', // Adjust path to your SCSS files
  scss: ['src/components/**/*.scss', 'src/globalStyles/**/*.scss'], // Adjust path to your SCSS files
  dist: 'dist/scss', // Output folder for SCSS
};

// Task to copy SCSS files to dist
gulp.task('copy-scss', () => {
  return gulp.src(paths.scss)
    .pipe(gulp.dest(paths.dist));
});

// Task to compile SCSS to CSS (optional)
gulp.task('compile-scss', () => {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${paths.dist}/css`));
});

// Default task
gulp.task('default', gulp.series('copy-scss', 'compile-scss'));
