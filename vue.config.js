module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7777',
                ws: true,
                changeOrigin: true
            }
        }
    },
    publicPath: './',

}