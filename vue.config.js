const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  }
  // pluginOptions: {
  //     'style-resources-loader': {
  //         preProcessor: 'less',
  //         patterns: [
  //             path.resolve(__dirname, './src/common/less/variable.less')
  //         ]
  //     }
  // }
}
