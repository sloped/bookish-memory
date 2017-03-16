module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}
/* global module */

// module.exports = {
//  entry: './resources/assets/js/app.js',
//   output: {
//     path: './public/js',
//     filename: 'app.js',
//     publicPath: "/js/",
//   },
//   devtool: "#inline-source-map",
//   vue: {
//     loaders: {
//       js: 'babel?presets[]=es2015!eslint'
//     }
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.(js|jsx)$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         query: {
//                 presets: ['es2015']
//               }
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//          query: {
//                     presets: ['es2015']
//                 }
//       },
//       {
//         test: /\.scss$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"]
//       }
//     ]
//   },
// };
