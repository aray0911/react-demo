let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
//引入glob
var glob = require('glob');
const srcDir = path.resolve(__dirname,'app');
var plugins = [];
plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包
plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
    filename: '../index.html', //生成的html存放路径，相对于 path
    // template: './src/template/index.html', //html模板路径
    hash: true,    //为静态资源生成hash值
}));

//entries函数
var entries= function () {
    var jsDir = path.resolve(srcDir, 'js')
    let entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
    var map = {};

    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
};
let entryFiles = entries();
module.exports = {
    entry:entries(),
    output:{
        path:path.resolve(__dirname,'./app/build'),
        filename:'[name].js'
    },
    module:{
        loaders:[
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ['import', { "libraryName": "antd", "style": true }],
                    ],
                }
            },
            // {test: /\.css$/, loader: 'style-loader!css-loader'},
            // {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
    plugins
};