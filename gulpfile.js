var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;

var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');

var src = {
    componentStyles: 'src/components/**/*.scss',
    mainSass: 'src/sass/main.scss',
    css: 'src/css/main.css',
    html: ['src/components/**/*.html', 'src/index.html'],
    components: 'src/components/**/*.js',
    dist: 'src/dist/**/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'babel'], function () {

    browserSync({
        server: {
            baseDir: ".",
            index: "./src/index.html"
        }
    });

    gulp.watch([src.componentStyles, src.mainSass], ['sass']);
    gulp.watch(src.components, ['babel']);
    gulp.watch([src.html, src.dist]).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function () {
    return gulp.src([src.mainSass])
        .pipe(sass()
            .on('error', function (err) {
                sass.logError(err);
                this.emit('end');
            }))
        //.pipe(sourcemaps.init())
        //.pipe(cssnano())
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'))
        .pipe(reload({ stream: true }));
});


gulp.task('babel', function () {
    return gulp.src(src.components)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'stage-0']
        }))
        .pipe(sourcemaps.write('src/dist'))
        .pipe(gulp.dest('src/dist'));
});

gulp.task('default', ['serve']);