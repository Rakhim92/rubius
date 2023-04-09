const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Таск компиляции SASS в CSS
function buildSass() {
    return src('src/scss/**/*.scss')
        .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
        .pipe(dest('src/css'))
        .pipe(dest('dist/css'));
}

// Таск работы с html файлами
function buildHtml() {
    return src('src/**/*.html').pipe(dest('dist'));
}

// Таск копирования статичных файлов
function copy() {
    return src(['src/images/**/*.*']).pipe(dest('dist/images'));
}

// Таск очистки dist
function cleanDist() {
    return src('dist', { allowEmpty: true }).pipe(clean());
}

// Таск отслеживания изменения файлов
function serve() {
    watch('src/scss/**/*.scss', buildSass);
    watch('src/**/*.html', buildHtml);
}

exports.sass = buildSass;
exports.html = buildHtml;
exports.copy = copy;
exports.cleanDist = cleanDist;
// exports.build = series(cleanDist, cleanDist, buildSass, buildHtml, copy);
exports.default = series(buildSass, buildHtml, copy, serve);