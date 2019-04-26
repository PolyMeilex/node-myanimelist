const gulp = require('gulp');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const fsn = require('fs-nextra');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');
const project = ts.createProject('tsconfig.json');

async function build() {
  await Promise.all([
    fsn.emptydir('dist'),
    fsn.emptydir('typings'),
  ]);

  const result = project.src()
    .pipe(sourcemaps.init())
    .pipe(project());

  return merge([
    result.dts.pipe(gulp.dest('typings')),
    result.js.pipe(sourcemaps.write('.', { sourceRoot: '../src' })).pipe(gulp.dest('dist')),
  ]);
}

gulp.task('dev', function () {
  watch('src/**/*.ts',{ ignoreInitial: false }, batch( (events, done) => {
      console.log('\x1b[33m %s \x1b[0m','Building...');
      build().then( o =>{
        console.log('\x1b[32m %s \x1b[0m','Build done!');
        done();
      })
  }));
});
gulp.task('default', build);
gulp.task('build', build);