var path = require('path');
var fs = require('fs');

// var path = require('path')

// module.exports = {
//   entry: {
//     main: path.join(__dirname, 'src', 'main.we?entry=true')
//   },
//   output: {
//     path: 'dist',
//     filename: '[name].js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.we(\?[^?]+)?$/,
//         loaders: ['weex-loader']
//       }
//     ]
//   }
// }
var entry = {};

function walk(dir) {
  dir = dir || '.'
  var directory = path.join(__dirname, 'src',dir);
  fs.readdirSync(directory)
    .forEach(function(file) {
      var fullpath = path.join(directory, file);
      var stat = fs.statSync(fullpath);
      var extname = path.extname(fullpath);
      if (stat.isFile() && extname === '.we') {
        var name = path.join( 'dist', dir, path.basename(file, extname));
        entry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
        var subdir = path.join(dir, file);
        walk(subdir);
      }
    });
}

walk();

module.exports = {
  entry: entry,
  output : {
    path: '.',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loader: 'weex'
      }
    ]
  }
}
