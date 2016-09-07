var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      './src/main.jsx'
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }//,
            //{ test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
            //{ test: /\.css$/, loader: "style!css" }
            //{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react'] } }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};