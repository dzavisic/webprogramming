const browserSync = require("browser-sync").create();
const { task, src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");

task("js", () => {
    return src([
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/jquery/dist/jquery.min.js"
    ]).pipe(dest("src/js"));
});

task("fonts", () => {
    return src("node_modules/font-awesome/fonts/*").pipe(dest("src/fonts"));
});

task("fa", () => {
    return src("node_modules/font-awesome/css/font-awesome.min.css").pipe(dest("src/css/"));
});

task("scss", () => {
    return src("src/scss/*.scss")
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest("src/css/"))
        .pipe(browserSync.stream());
});

task("reload", () => {
    browserSync.reload();
    cb();
});

task("watch", () => {
    browserSync.init({
        server: "./src"
    });

    watch("src/scss/*.scss").on("change", series("scss"));
    watch("src/*.html").on("change",series("reload"));
});

task("serve", series("scss","watch"));

task("default", parallel("js", "fonts", "fa", "serve"));