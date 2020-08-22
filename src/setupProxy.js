const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/mock', createProxyMiddleware({
    target: 'http://localhost:3333',
    changeOrigin: true,
    // pathRewrite: { //路径替换
    //   '^/mock': '', // axios 访问/api2 == target + /api
    // }
  }));

  app.use('/api2', createProxyMiddleware({
    target: 'http://vareyoung.top',
    changeOrigin: true,
    pathRewrite: { //路径替换
      '^/api2': '/api', // axios 访问/api2 == target + /api
    }
  }));

};