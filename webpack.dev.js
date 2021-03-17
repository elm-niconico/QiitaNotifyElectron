const {merge} = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート


const development = {mode: 'development'};

const main = merge(common[0], development);

const renderer = merge(common[1], {
    mode: 'development',
    devServer: {
        contentBase: __dirname + "/build",
        hot : true
    }
});
const preload = merge(common[2], development);

module.exports = [main, renderer, preload];

