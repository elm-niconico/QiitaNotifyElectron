const {merge} = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート

const production = {mode: "production"}


const main = merge(common[0], production)
const renderer = merge(common[1], production)
const preload = merge(common[2], production)

module.exports = [main , renderer, preload];
