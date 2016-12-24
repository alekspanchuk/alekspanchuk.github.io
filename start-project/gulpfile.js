// === VARIABLES
	var gulp 				 = require('gulp'),
			sass 				 = require('gulp-sass'), // SASS to CSS
			browserSync  = require('browser-sync'),
			concat			 = require('gulp-concat'), // merge files
			uglify			 = require('gulp-uglifyjs'), // minify JS
			cssnano			 = require('gulp-cssnano'), // minify CSS
			rename			 = require('gulp-rename'), // rename (add .min)
			del 				 = require('del'),
			imagemin 		 = require('gulp-imagemin'), // img optimize
			pngquant     = require('imagemin-pngquant'),
			cache				 = require('gulp-cache'),
			autoprefixer = require('gulp-autoprefixer');
// === SASS
	gulp.task('sass', function () {
		gulp.src('app/sass/**/*.sass')
			.pipe(sass())
			.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
			.pipe(gulp.dest('app/css/'))
	})
// === CSS-LIBS
	gulp.task('css-libs', function () {
		return gulp.src([
			'app/css/libs.css',
			'app/css/main.css'
			])
			.pipe(cssnano())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('app/css/'))
	})
// === USERSCRIPT
	gulp.task('userscript', function () {
		return gulp.src('app/js/common.js')
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('app/js/')) 
	})
// === SCRIPTS
	gulp.task('scripts', function () {
		return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
		])
			.pipe(concat('libs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('app/js/')) 
	})
// === IMG
	gulp.task('img', function () {
		return gulp.src('app/img/**/*')
			.pipe(cache(imagemin({
				interlaced: true,
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				use: [pngquant()]
			})))
			.pipe(gulp.dest('dist/img/'))
	})
// === BROWSER-SYNC
	gulp.task('browser-sync', function () {
		browserSync({
			server: {
				baseDir: 'app'
			},
			notify: false
		})
	})
// === CLEAN
	gulp.task('clean', function () {
		return del.sync('dist');
	})
// === CACHE
	gulp.task('clearcache', function () {
		return cache.clearAll();
	})
// === WATCH
	gulp.task('watch', ['browser-sync', 'sass', 'css-libs', 'scripts', 'userscript'], function () {
		gulp.watch('app/sass/**/*.sass', ['sass']);
		gulp.watch('app/css/**/*.css', ['css-libs', browserSync.reload]);
		gulp.watch('app/*.html', browserSync.reload);
		gulp.watch('app/js/**/*.js', ['userscript', browserSync.reload]);
	})
// === BUILD
	gulp.task('build', ['clean', 'sass', 'scripts', 'css-libs', 'userscript', 'img'], function () {
		var buildCSS = gulp.src([
			'app/css/libs.min.css',
			'app/css/main.min.css'
			])
			.pipe(gulp.dest('dist/css/'));

		var buildFonts = gulp.src('app/fonts/**/*')
			.pipe(gulp.dest('dist/fonts/'));

		var buildJS = gulp.src([
			'app/js/libs.min.js',
			'app/js/common.min.js'
		])
			.pipe(gulp.dest('dist/js/'));

		var buildHTML = gulp.src('app/*.html')
			.pipe(gulp.dest('dist/'));
	})
