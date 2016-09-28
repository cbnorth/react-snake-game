module.exports = {
	entry: "./src/App.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				query: {
					"presets": ["react", "es2015"]
				},
				exclude: /node_modules/
			}
		]
	}
};
