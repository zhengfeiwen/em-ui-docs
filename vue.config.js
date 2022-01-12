// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, on Mac: sudo npm run / sudo yarn
const devServerPort = 9729 // TODO: get this variable from setting.ts
const mockServerPort = 9730 // TODO: get this variable from setting.ts
const name = '云端组件库文档' // TODO: get this variable from setting.ts

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: require.resolve('./markdown-loader')
        }
      ]
    })
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      vant: 'vant',
      'element-ui': 'ELEMENT',
      'dingtalk-jsapi': 'dd',
      echarts: 'echarts'
    }
  },
  devServer: {
    port: devServerPort,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    progress: false,
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${mockServerPort}/mock-api/v1`,
        changeOrigin: true, // needed for virtual hosted sites
        ws: true, // proxy websockets
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './node_modules/hs-elementui/src/styles/hs/index.scss'),
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    const cdn = {
      css: [
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/vant/index.css',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/element-ui/element-ui-index.css'
      ],
      js: [
        process.env.NODE_ENV === 'development' ? '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/vue/v2.6.11.js' : '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/vue/v2.6.11.min.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/vue-router/v3.1.6.min.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/vant/vant.min.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/vuex/v3.1.2.min.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/axios/v0.19.2.min.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/dingtalk-jsapi/dingtalk.open.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/element-ui/index.js',
        '//wise-job.oss-cn-zhangjiakou.aliyuncs.com/webjs/libs/echarts/echarts.min.js'
      ]
    }
    // 如果使用多页面打包，使用 vue inspect --plugins 查看 html 是否在结果数组中
    config.plugin('html').tap(args => {
      // html中添加cdn
      args[0].cdn = cdn
      return args
    })

    // provide the app's title in html-webpack-plugin's options list so that
    // it can be accessed in index.html to inject the correct title.
    // https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin
    config.plugin('html').tap(args => {
      args[0].title = name
      return args
    })

    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // https://webpack.js.org/configuration/devtool/#development
    // Change development env source map if you want.
    // The default in vue-cli is 'eval-cheap-module-source-map'.
    // config
    //   .when(process.env.NODE_ENV === 'development',
    //     config => config.devtool('eval-cheap-source-map')
    //   )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: path.resolve(__dirname, 'src/components'),
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
