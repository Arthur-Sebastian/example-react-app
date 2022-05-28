const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.jsx",
	mode: "development",
	module: {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel-loader",
			options: { presets: ["@babel/env"] }
		},
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},
		{
			test: /\.svg$/,
			loader: 'svg-url-loader',
			options: { limit: 10000 }
		}
	]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	devServer: {
		static: { directory: path.join(__dirname, "public") },
		port: 8000,
		hot: true
	},
};
