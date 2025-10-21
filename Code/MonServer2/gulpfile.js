const gulp=require("gulp");
const ts = require("gulp-typescript");

const fichiersACopier="client/src/**/*{.html,.css,.js,.json, .svg}";
const fichiersTS="client/src/**/*{.ts}";

gulp.task("copy-no-action", function(done){   

    // Copier les fichiers HTML de client/src vers server/wwwroot
    return gulp.src(fichiersACopier)
    .pipe(gulp.dest("server/wwwroot/"));
    //done();
});

gulp.task("ts", function(done){   
    // Compiler les fichiers TypeScript de client/src vers server/wwwroot/scripts

    const tsProject = ts.createProject("client/tsconfig.json");
    return gulp.src(fichiersTS)
    .pipe(tsProject())
    .pipe(gulp.dest("server/wwwroot/"));
    //done();
});

// Tache par défaut
gulp.task("default", 
    // surveiller les fichiers à copier et exécuter la tache de copie
    () =>gulp.watch(fichiersACopier, gulp.series("copy-no-action"))
);
