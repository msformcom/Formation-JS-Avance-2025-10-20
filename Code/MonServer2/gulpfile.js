const gulp=require("gulp");
const ts = require("gulp-typescript");

const fichiersACopier="client/src/**/*{.html,.css,.js,.json, .svg}";
const fichiersTS="client/src/**/*{.ts}";

function compilationTS(done){   
    // Compiler les fichiers TypeScript de client/src vers server/wwwroot/scripts

    const tsProject = ts.createProject("client/tsconfig.json");
    return gulp.src(fichiersTS)
    .pipe(tsProject())
    .pipe(gulp.dest("server/wwwroot/"));
    //done();
}
function copyNoAction(done){   

    // Copier les fichiers HTML de client/src vers server/wwwroot
    return gulp.src(fichiersACopier)
    .pipe(gulp.dest("server/wwwroot/"));
    //done();
}

gulp.task("copy-no-action", copyNoAction);
gulp.task("ts", compilationTS);

// Tache par défaut
gulp.task("default", 
    // surveiller les fichiers à copier et exécuter la tache de copie

       ()=>{
        compilationTS();
        copyNoAction();
        return gulp.watch(fichiersACopier, copyNoAction);
       } 
);


