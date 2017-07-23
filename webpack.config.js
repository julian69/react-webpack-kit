const path = require("path"),
      glob = require("glob"),
      webpack = require("webpack"),
      HtmlWebpackPlugin = require("html-webpack-plugin"), 
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      PurifyCSSPlugin = require("purifycss-webpack"),

      DIST_DIR = path.resolve(__dirname, "dist"),
      SRC_DIR = path.resolve(__dirname, "src"),
      enviroment = process.env.NODE_ENV;

// ========= Check what enviroment we are in and set the values acordingly ========= \\ 
    
    let cssConfig, 
        API_URL;

    const isProd = enviroment === "production";
    const cssDev = [ 
        "style-loader", 
        "css-loader", 
        "sass-loader"
    ]; 

    const cssProd = ExtractTextPlugin.extract({ 
    			          fallback: "style-loader",
    			          use: [
                              "css-loader", 
                              "sass-loader"
                          ],
    			          publicPath: '../' // This helped getting the images in the css files ( url(bla bla) )
    		        });

    // ========= Enviroment configuration ========= \\
    switch (enviroment){
    
        case "development":
                API_URL = "development API URL";
                cssConfig = cssDev;
        break;

        case "production":
                API_URL = "production API URL";
                cssConfig = cssProd;
        break;
    }

// =================== Configuration Object =================== \\
    
    module.exports = {
    	entry: {
    		app: SRC_DIR + "/app/index.js"
    	},
    	output: {
            path: DIST_DIR,
            filename: "js/[name].bundle.min.js", // This goes to the dist folder and contains all the compiled js code
        },
        resolve: {
            extensions: [
                ".js", 
                ".jsx"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
    		        use: cssConfig
                },
                {
                    enforce: "pre",
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                      fix: true
                    }
                },
                { 
                	test: /\.jsx?$/, 
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
                },
                { 
                    test: /\.(woff2?|svg)$/, 
                    use: "url-loader?limit=10000&name=fonts/[name].[ext]" 
                },
                { 
                    test: /\.(ttf|eot)$/, 
                    use: "file-loader?name=fonts/[name].[ext]" 
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
            historyApiFallback: true,
            openPage: "" // Workaround to prevent the addition of "undefined" in the URL
            // Link to issue on webpack-dev-server version: https://github.com/webpack/webpack-dev-server/issues/960
        },
    	plugins: [
    		new HtmlWebpackPlugin({
                title: "React-Redux-Bootstrap Starter Kit", // The title for the HTML file
                // favicon: '', // our project's favicon
                minify: {
                    collapseWhitespace: isProd // Minify the HTML
                },
                hash: true, // Add a hash at the end of the script/link URL
                chunks: ["app"], // this is just in case we run multimple entries. It picks up only app's chunks 
                template: "./src/index.html", // Load a custom template
            }),
            new ExtractTextPlugin({
                filename: "./css/[name].min.css",
                disable: !isProd,
                allChunks: true
            }),
            new webpack.HotModuleReplacementPlugin(),
         //       new PurifyCSSPlugin({
         //        	paths: glob.sync(path.join(__dirname, 'src/*.html')), // given the case we are using an css library, it'll load only the css we need
    	    // }),
    	    new webpack.DefinePlugin({ // this allows us to declare global variables as to acces them from our app
    			  _API: JSON.stringify(API_URL)
    		})
    	]
    }