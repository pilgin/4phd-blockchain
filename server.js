var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack/dev')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: false,
  historyApiFallback: true,
  quiet: true,
  proxy: {
    '/api/**': {
      target: 'http://zipa.zapto.org:6664',
      secure: false,
      changeOrigin: true
    }
  }
}).listen(3001, 'localhost', function (error, result) {
  if (error) {
    console.log(error)
  }

  console.log('Listening at http://localhost:3001!')
})
