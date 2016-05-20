const gulp = require('gulp');
const commonTasks = require('@telerik/kendo-common-tasks');
const jasmine = require('gulp-jasmine');
const specReporter = require('jasmine-spec-reporter');
const webpackConfig = require('./webpack.config.js');
const SRC = "src/**/*.js";
const TESTS = "test/**/*.js";
const SRC_TESTS = [SRC, TESTS];

commonTasks.addTasks(gulp, 'kendo-intl', SRC, webpackConfig);

gulp.task('test', () =>
    gulp.src(TESTS)
    .pipe(commonTasks.webpackStream(webpackConfig.test))
    .pipe(gulp.dest('tmp/test/'))
    .pipe(jasmine({
        reporter: new specReporter()
    }))
);

gulp.task('watch-test', () => {
    gulp.run('test');
    return gulp.watch(SRC_TESTS, [ 'test' ]);
});