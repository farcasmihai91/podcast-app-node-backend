/*
* Build everything in the “src” directory and dump the artifacts in the “dist” directory.
* Essentially we’ve created a basic clean file that will delete old artifacts and then 
* subsequently build our TypeScript files and place them along with their source maps in 
* a clean “dist” folder.
*/

var gulp = require('gulp');
var tsc  = require("gulp-typescript");
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var tsProject = tsc.createProject("tsconfig.json");

gulp.task('clean', function(cb){
    return del('dist', cb)    
})

gulp.task('build', ['clean'], function() {
    var tsResult = gulp.src(["typings/index.d.ts","src/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.', {
           sourceRoot: function(file){ return file.cwd + '/src'; }
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['build']);