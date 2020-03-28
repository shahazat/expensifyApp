//entry point is app.js in src folder 
//where is output 
//webpack.js.org 
//we use a plugin to extract css files to a seprate file
//extract-text-webpack-plugin
const ExtractTetPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development' ; //it is filled with production by heroku, test by jest in package.json

if(process.env.NODE_ENV == 'test'){
    // THis does not really add add env vars to jest!
    // require('dotenv').config({path: '.env.test'}) 

}else if(process.env.NODE_ENV == 'development'){
    require('dotenv').config({path: '.env.development'})

}

module.exports = (env) => {
    const isProduction = env === 'mYproduction';
    const cssExtract = new ExtractTetPlugin('styles.css');//this is name of file 

    return {
        entry: './src/Section12/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'), //######################### ABSOULUTE PATH , does not need to exist beforehand
            filename: 'bundle.js'
        },

        module: { //see documentation 
            rules: [
                {
                    loader: 'babel-loader', //to pass options, you need to specify seperate configuration file for babel
                    test: /\.js$/,  //use loader only on files that meet this criteria, 
                    exclude: /node_modules/
                }, {
                    test: /\.s?css$/,
                    /*use:[ //to have multiple-loaders, style-loader handles inline loading 
                        'style-loader','css-loader','sass-loader'
                    ]*/
                    use: cssExtract.extract({
                        use: [
                            //'css-loader', 'sass-loader'
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            cssExtract,
            new webpack.DefinePlugin({//we are passing variable to client side js, HOW IT WORKS? in a KEY:VAL, KEY BECOMES VAL
                //json.stringify adds double quotes
                //another way would be `"${process.env.FIREBASE_API_KEY}"`
                //now I use JSON.stringify(process.env.FIREBASE_API_KEY) here.
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY), 
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN), 
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL), 
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID), 
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET), 
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
                
            })
        ],
        //devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', //for source mapping, that is findind source of corrupted file
        devtool: isProduction ? 'source-map' : 'inline-source-map', //cheap-... does not provide css map source 
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, //return index.html for all 404 pages 
            publicPath : '/dist/'
        }
    };
};
