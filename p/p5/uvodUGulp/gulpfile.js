const { watch, series } = require("gulp");



function clean(cb){
    cb();
}

function js(cb){
    console.log("JS code changed");
    cb();
}

function css(cb){
    cb();
}

exports.default = function () {
    watch("src/*.js", series(clean, js));
}