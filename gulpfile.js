const {src, dest} = require('gulp')

function copy (cb) {

// place code for your default task here

src('./src/static/data/*.*')

.pipe(dest('./dist/data/'))

cb();

}

exports.default = copy