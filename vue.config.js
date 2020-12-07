
const path = require('path')
const resolve = function (dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  publicPath: '/',
  outputDir: process.env.VUE_APP_PACKAGE_NAME || 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.VUE_APP_NODE_ENV === 'development',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) /* 别名配置 */
    config.optimization.runtimeChunk('single')
  }
}
