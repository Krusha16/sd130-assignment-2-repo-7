const {src, dest, series, parallel} = require ('gulp');


//scripts Task
function stylesTask() {
    return src('src/*.css')
    .pipe(dest('dist/css'))
}

exports.styles = stylesTask;