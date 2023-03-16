const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/',
        createProxyMiddleware(
            {
                target: 'https://juso.sendy.ai/app/search/addrSearchApi.do',
                changeOrigin: true,
            }
        )
    )
}