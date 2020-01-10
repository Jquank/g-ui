const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
        // config.externals = {
        //   vue: 'Vue',
        //   'element-ui': 'ELEMENT',
        //   'vue-router': 'VueRouter',
        //   vuex: 'Vuex',
        //   axios: 'axios'
        // }
        // config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
    },
    productionSourceMap: false,
    pages: {
        demo: {
            entry: './src/example/components-demo/main.js',
            template: './src/example/components-demo/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'demo']
        },
        design: {
            entry: './src/example/design-intro/main.js',
            template: './src/example/design-intro/index.html',
            filename: 'design.html',
            chunks: ['chunk-vendors', 'chunk-common', 'design']
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
