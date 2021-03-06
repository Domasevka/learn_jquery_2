'use strict';
// plugins for development

var gulp = require('gulp'),
    rimraf = require('rimraf'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    concat = require('gulp-concat'),
    del = require('del'),
    gulpIf = require('gulp-if'),
    browserSync = require('browser-sync').create();

// plugins for build
var mqpacker = require('css-mqpacker'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
//csso = require('gulp-csso');

// plugins for svg
var svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

var srcDir = 'src/';
var outputDir = 'build/';

//const isDevelopment = !process.env.NODE_ENV || !process.env.NODE_ENV == 'development';

// for build folder
gulp.task('cleanOutputDir', function () {
    return del('build');
});

gulp.task('sass', function () {
    return gulp.src(srcDir + 'styles/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'sass',
                    message: err.message
                };
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            import: process.cwd() + '/tmp/styles/_sprite'
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', "> 2%"],
            cascade: false
        }))
        .pipe(postcss([
            mqpacker({
                sort: true
            })
        ]))
        //.pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(outputDir + 'styles/'))
        .pipe(notify('Sass is compile!'));
});

gulp.task('pug', function(){
    return gulp.src([srcDir + '*.pug', '!' + srcDir + '_*.pug'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(outputDir)); // Выводим сгенерированные HTML-файлы в корневую папку
});

gulp.task('jsSync', function () {
    //return gulp.src(srcDir + 'js/*.js')
    return gulp.src(srcDir + 'js/**/*.*')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        //.pipe(concat('index.js', {newLine: ';'}))
        //.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(outputDir + 'js/'));
});

gulp.task('data', function () {
    return gulp.src(srcDir + 'data/**/*.*')
        .pipe(gulp.dest(outputDir + 'data/'));
});

gulp.task('imageSync', function () {
    return gulp.src(srcDir + 'img/**/*.*')
        /*.pipe(imagemin({
            progressive: true,
            svgPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))*/
        .pipe(gulp.dest(outputDir + 'img/'));
});

gulp.task('fontsSync', function () {
    return gulp.src(srcDir + 'fonts/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest(outputDir + 'fonts/'));
});

/*
gulp.task('js', function() {
    return gulp.src([
    nmDir + 'swiper/dist/js/swiper.min.js',
    nmDir + 'jquery/dist/jquery.min.js',
    srcDir + 'js/*.js'
    ])
    .pipe(plumber())
    .pipe(concat("bundle.js"))
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest(outputDir + 'js/')); // Выгружаем в папку
 });*/

gulp.task('svgSpriteBuild', function (){
    return gulp.src(srcDir + 'i/**/*.svg')
    // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove vendor fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    dest: '.',
                    bust: false,
                    sprite: 'sprite.svg',
                    render: {
                        scss: {
                            dest:'_sprite.scss',
                            template:srcDir + 'styles/templates/_sprite_template.scss'
                        }
                    }
                }
            }
        }))
        .pipe(gulpIf('*.scss', gulp.dest('tmp/styles'), gulp.dest('build/img')));
});

gulp.task('build', gulp.series(
    'cleanOutputDir',
    gulp.parallel('pug', /*'bower', */'jsSync', 'data', 'imageSync', 'fontsSync', 'svgSpriteBuild', 'sass'))
);

gulp.task('watch', function(){
    gulp.watch(srcDir + '**/*.pug', gulp.series('pug'));
    gulp.watch(srcDir + 'styles/**/*.scss', gulp.series('sass'));
    gulp.watch(srcDir + 'i/*.svg', gulp.series('svgSpriteBuild'));
    gulp.watch(srcDir + 'js/*.js', gulp.series('jsSync'));
    gulp.watch(srcDir + 'img/**/*', gulp.series('imageSync'));
    gulp.watch(srcDir + 'fonts/**/*', gulp.series('fontsSync'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'build/',
            //index: "index.html"
            index: "calculator.html"
            //index: "hotel-list.html"
        }
    });
    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);





