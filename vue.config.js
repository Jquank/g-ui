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
  },
  pages: {
    demo: {
      entry: './src/example/components-demo/main.js',
      template: './src/example/components-demo/index.html'
    },
    design: {
      entry: './src/example/design-intro/main.js',
      template: './src/example/design-intro/index.html'
    }
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
