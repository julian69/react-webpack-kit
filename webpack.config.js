var path = require("path");
var glob = require('glob');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); // This plugin handles all the HTML stuff
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // This plugin extracts the app's css and injects it in a single file
var PurifyCSSPlugin = require('purifycss-webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var enviroment = process.env.NODE_ENV;

// ========= Check what enviroment we are in and set the values acordingly ========= \\ 
    
    var isProd = enviroment === "production"; // assess node env coming from package.json
    var cssConfig;
    var cssDev = [ // for dev enviroment
        "style-loader", 
        "css-loader", 
        "sass-loader"
    ]; 
    var cssProd =  ExtractTextPlugin.extract({ // for prod enviroment
    			          fallback: 'style-loader',
    			          use: ['css-loader', 'sass-loader'],
    			          // publicPath: '/'
    		        });
    var cssConfig = isProd ? cssProd : cssDev; // choose the right css configuration depending on the enviroment

    // ========= Enviroment configuration ========= \\
    var API_URL;

    switch (enviroment){
    
        case 'development':
                API_URL = "development API URL";
                cssConfig = cssDev;

        break;

        case 'production':
                API_URL = "production API URL";
                cssConfig = cssProd;
        break;
    }

// =================== Configuration Object =================== \\
    
    module.exports = {
    	entry: {
    		app: SRC_DIR + '/app/index.js'
    	},
    	output: {
            path: DIST_DIR,
            filename: '[name].bundle.js' // THis goes to the dist folder and contains all the compiled js code
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
    		        use: cssConfig
                },
                { 
                	test: /\.jsx?$/, // replace by jsx
                	exclude: /node_modules/, 
                	use: "babel-loader" 
                },
                {
                	test: /\.(jpe?g|png|gif|svg)$/i,
                	use: [
                		// "file-loader?name=[name].[ext]&outputPath=img/&publicPath=img/",
                		"file-loader?name=[hash:6].[ext]&outputPath=img/", // this will collect all the img and move them to dist
                		"image-webpack-loader" // image optimization
                	] 
                }
            ]
        },
        devServer: { // Development server configuration
            contentBase: DIST_DIR,
            compress: true, 
            port: 9000,
            hot: true,
            stats: "errors-only",
            open: true,
            openPage: '' // Workaround to prevent the addition of "undefined" in the URL
            // Link to issue on webpack-dev-server version: https://github.com/webpack/webpack-dev-server/issues/960
        },
    	plugins: [
    		new HtmlWebpackPlugin({
                title: 'Project Demo', // The title for the HTML file
                // favicon: '', // our project's favicon
                minify: {
                    collapseWhitespace: true // Minify the HTML
                },
                hash: true, // Add a hash at the end of the script/linkk URL
                chunks: ['app'], // this is just in case we run multimple entries. It picks up only app's chunks 
                template: './src/index.html', // Load a custom template
            }),
            new ExtractTextPlugin({
                filename: 'styles.css',
                disable: !isProd,
                allChunks: true
            }),
            new webpack.HotModuleReplacementPlugin(),
            new PurifyCSSPlugin({
             	paths: glob.sync(path.join(__dirname, 'src/*.html')), // given the case we are using an css library, it'll load only the css we need
    	    }),
    	    new webpack.DefinePlugin({ // this allows us to declare global variables as to acces them from our app
    			  _API: JSON.stringify(API_URL)
    		})
    	]
    }