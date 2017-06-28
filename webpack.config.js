const webpack = require('webpack')
const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{index: './app/app.js'},
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module: {
        loaders:[
            { test: /\.js$/, /*exclude: /node_modules/,*/ loader: 'babel-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less/, loader: 'style-loader!css-loader!less-loader'},
            { test:/\.vue/, loader:'vue-loader'},
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpeg|jpg)\w*/,
                loader: 'file-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.json'],
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            chunk: ['index'],
            template:'./app/app.html',
            filename:'index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ],
    watch: true,
    devtool:'#eval-source-map'
};
