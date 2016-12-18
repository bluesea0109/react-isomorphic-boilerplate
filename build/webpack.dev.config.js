const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '../'),
    entry: {
        'index': [
            './client/index.js',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                'presets': ['es2015', 'react', 'stage-0', 'react-hmre']
            }
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&camelCase&localIdentName=[name]__[local]__[hash:base64:8]!sass')

        }]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
        'redux': 'window.Redux',
        'react-redux': 'window.ReactRedux',
        'react-bootstrap': 'window.ReactBootstrap',
        'react-bootstrap-datetimepicker': 'window.ReactBootstrapDatetimePicker',
        'superagent': 'window.superagent',
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.scss', '.html']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: '[name].js'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('[name].css')
    ],
}
