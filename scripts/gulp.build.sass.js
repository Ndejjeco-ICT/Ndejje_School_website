/**
 * The main gulp task for running sass extraction and combination
 */
const gulp = require('gulp')
const gulp_concat  = require('gulp-concat');
const gulp_sass_compiler = require('gulp-sass')(require('sass'));


function __sassErrorHandler(e){
    console.log(`---SASS_ERROR---:${e}`)
}


function __gulpBuildSasstask(){
    return gulp.src("src/sw/layouts/**/*.scss")
            .pipe(
                gulp_concat("workload.main.scss")
                )
            .pipe(
                gulp_sass_compiler().on('error',__sassErrorHandler)
                )
            .pipe(gulp.dest("./out/public"))
}
exports.BuildSassFiles = __gulpBuildSasstask;