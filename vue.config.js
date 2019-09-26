const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('ex', resolve('src/example'))
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
