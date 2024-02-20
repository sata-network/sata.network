const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  lintOnSave: false,
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/global.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new CopyPlugin({
        patterns: [{ from: 'static', to: 'static', noErrorOnMissing: true }],
      }),
    ],
    resolve: {
      alias: {
        process: 'process/browser',
      },
      fallback: {
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        crypto: false,
        fs: false,
        assert: false,
        process: false,
        util: false,
        path: false,
        stream: false,
        http: false,
        https: false,
        os: false,
        url: false,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Sata'
      return args
    })
    config.resolve.alias.set('@static', resolve('static'))
  }
})
