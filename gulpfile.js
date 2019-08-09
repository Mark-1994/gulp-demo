// 引入gulp模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// 使用gulp.task建立任务
// 1. 任务名称
// 2. 任务的回调函数

// 先引入html文件中的公共代码，然后压缩html文件中的代码
gulp.task('htmlmin', async() => {
    await gulp.src('./src/*.html')
        .pipe(fileinclude())
        // 压缩html文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

// less语法转换，css代码压缩
gulp.task('cssmin', async() => {
    await gulp.src(['./src/css/*.less', './src/css/*.css'])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});

// es6代码转换，代码压缩
gulp.task('jsmin', async() => {
    await gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// 复制文件夹
gulp.task('copy', async() => {
    await gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));
});

// 构建任务
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy'));