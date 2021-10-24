module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://121.199.31.100:9892',
                ws: true,
                changeOrigin: true
            }
        }
    },
    publicPath: './',
    chainWebpack: config => {
        config.module
            .rule('min-image')
            .test(/\.(png|jpg|gif|)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({disable: false})//process.env.NODE_ENV == 'development' ? true : false 此处为ture的时候不会启用压缩处理,目的是为了开发模式下调试速度更快,网上错误示例直接写为disable:true,如果不去查看文档肯定是要被坑的
            .end()
    }
}