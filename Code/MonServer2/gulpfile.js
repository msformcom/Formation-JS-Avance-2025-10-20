const gulp = require("gulp");
const uglify = require("gulp-uglify");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));

const jsFiles = "client/src/**/*.js";
const htmlFiles = "client/src/**/*.html";
const cssFiles = "client/src/**/*.css";
const scssFiles = "client/src/**/*.scss";
const tsFiles = "client/src/**/*.ts";
const wwwrootPath = "server/wwwroot/";
const fichiersACopier = "client/src/**/*{.html,.css,.json, .svg}";

function scssTask() {
    // Compiler les fichiers SCSS de client/src vers server/wwwroot/scripts
    return gulp.src(scssFiles) 
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(wwwrootPath));
}

function jsTask() {
    // Copier les fichiers JS de client/src vers server/wwwroot/scripts
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(wwwrootPath));
}

function tsTask() {
    // Compiler les fichiers TypeScript de client/src vers server/wwwroot/scripts

    const tsProject = ts.createProject("client/tsconfig.json");
    return gulp.src(tsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(wwwrootPath));

}
function copyNoActionTask(done) {
    // Copier les fichiers HTML de client/src vers server/wwwroot
    return gulp.src(fichiersACopier)
        .pipe(gulp.dest(wwwrootPath));
    //done();
}
function watchFilesTask() {
    gulp.watch(scssFiles, scssTask);
    gulp.watch(jsFiles, jsTask);
    gulp.watch(tsFiles, tsTask);
    gulp.watch(fichiersACopier, copyNoActionTask);
}

gulp.task("copy-no-action", copyNoActionTask);
gulp.task("ts", tsTask);
gulp.task("js", jsTask);
gulp.task("scss", scssTask);

// Tache par défaut
gulp.task("default",
    // surveiller les fichiers à copier et exécuter la tache de copie

    () => {
        gulp.parallel(tsTask, jsTask, copyNoActionTask, scssTask)();
        watchFilesTask();
    }
);


