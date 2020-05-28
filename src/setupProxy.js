const proxy = require('http-proxy-middleware')

module.exports = function(app) {

  app.use(proxy('/api/**', {
     target: 'https://api.gugudata.com',
     changeOrigin: true
     // cookieDomainRewrite: "http://localhost:3000"
  }));
}
