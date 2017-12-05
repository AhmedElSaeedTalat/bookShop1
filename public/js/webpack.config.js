var webpack = require("webpack");
module.exports = {
	entry:{
		app:[	"./main.js",
			]
},
output:{
		path:__dirname+"/dist",
		filename:"theName.js"
},
  module: {
    rules: [
     {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
}