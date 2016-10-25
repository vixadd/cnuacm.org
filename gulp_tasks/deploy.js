const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

const conf = require('../conf/gulp.conf');

gulp.task('deploy:staging', deployStaging);
gulp.task('deploy:production', deployProduction);

function deployStaging() {
  return gulp.src(conf.path.dist('/**/*'))
    .pipe(ghPages());
}

function deployProduction() {
  return gulp.src(conf.path.dist('/**/*'))
    .pipe(ghPages({
      remoteUrl: 'git@github.com:CNU-ACM/cnu-acm.github.io.git',
      branch: 'master'
    }));
}
