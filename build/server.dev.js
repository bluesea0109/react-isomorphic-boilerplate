require('babel-polyfill')
require('babel-core/register')({
    presets: ['es2015', 'react', 'stage-0']
})
require('css-modules-require-hook')({
    extensions: ['.scss'],
    generateScopedName: '[name]__[local]__[hash:base64:8]',
})
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 8000
})

const app = require('../server/app.js').default
const convert = require('koa-convert')
const webpack = require('webpack')
const path = require('path')
const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')
const config = require('./webpack.dev.config')

const port = 3000
const compile = webpack(config)

console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
app.use(convert(devMiddleware(compile, {
    noInfo: true,
    publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compile)))
app.listen(port)
