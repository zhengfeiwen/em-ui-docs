## 总览

[hs-elementui-docs](https://github.com/zhengfeiwen/hs-elementui-docs) 是hs-elementui组件库的文档项目，它基于 [vue](https://github.com/vuejs/vue), [typescript](https://www.typescriptlang.org/) 和 [element-ui](https://github.com/ElemeFE/element)实现。

## 线上文档

[文档](https://github.com/zhengfeiwen/hs-elementui-docs/blob/main/README.md)

## 线上地址

[示例](https://github.com/zhengfeiwen/hs-elementui-docs)

## 截图

![主页](https://github.com/zhengfeiwen/hs-do-you-docs/blob/main/demo.png)

## 相关项目

[hs-modules-master](https://github.com/zhengfeiwen/hs-elementui-master) (hs-modules-master)

## 功能

```txt
- 登录 / 注销
  - 目前统一用admin/admin登录
-全局功能
  - 首页
  - 文档
  - 安装
  - 更新日志
  - 图标
  - 组件
    - 富文本编辑器
    - 日期选择器
    - 导航栏
    - 进度条
    - 上传
    - 按钮
      - 展开按钮
      - 图标按钮
      - logo按钮
    - 业务组件
      - 操作按钮组
      - 查询条件
  - 表格
    - 基本表格
    - 树形表格
  - 模板页面
  - 综合实例
  - 错误页面
    - 401
    - 404

- 环境要求
  - npm.js  ^6.14.4
  - node.js ^10.0.0
  - vue/cli ^4.0.0
- 安装步骤
  - 从[github]上下载源码到本地
  - 在项目根目录执行 npm i 安装所需依赖
    - 如果安装时候有报错:[3657 error syscall spawn git]的错误，请先安装git.
    - 如果安装`hs-elementui`报错，可能是镜像不对，尝试用npm的代理去安装(可以安装nrm去管理代理)
    - npm i -g nrm 
    - nrm use npm
    - 或者也可以单独安装 `npm i hs-elementui`
  - 启动项目 `npm run serve`
    如果是mock后台，则会启动mock服务
```
## 传送门
  [git](https://npm.taobao.org/mirrors/git-for-windows/v2.29.2.windows.1/Git-2.29.2-64-bit.exe)
  [hs-elementui-master](https://github.com/zhengfeiwen/hs-elementui-master)
## 前序准备

`你需要在本地安装` [npm](https://www.runoob.com/nodejs/nodejs-npm.html) [vue/cli](https://cli.vuejs.org/zh/guide/installation.html) [node](https://www.runoob.com/nodejs/nodejs-install-setup.html)

## 目录结构

本项目已经主要是为云端组件库做文档说明，功能上主要是为了展示demo

```bash
├── mock                       # mock 服务器 与 模拟数据
├── public                     # 静态资源 (会被直接复制)
│   │── favicon.ico            # favicon图标
│   │── manifest.json          # PWA 配置文件
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 (由 webpack 处理加载)
│   ├── components             # 全局组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局过滤函数
│   ├── icons                  # svg 图标
│   ├── lang                   # 国际化
│   ├── layout                 # 全局布局
│   ├── pwa                    # PWA service worker 相关的文件
│   ├── router                 # 路由
│   ├── store                  # 全局 vuex store
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── permission.ts          # 权限管理
│   ├── settings.ts            # 设置文件
│   └── shims.d.ts             # 模块注入
├── tests                      # 测试
├── .circleci/                 # 自动化 CI 配置
├── .browserslistrc            # browserslistrc 配置文件 (用于支持 Autoprefixer)
├── .editorconfig              # 编辑相关配置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置
├── babel.config.js            # babel-loader 配置
├── jest.config.js             # jest 单元测试配置
├── package.json               # package.json 依赖
├── postcss.config.js          # postcss 配置
├── tsconfig.json              # typescript 配置
└── vue.config.js              # vue-cli 配置
```

## 如何设置以及启动项目

### 安装依赖

```bash
npm install
```

### 启动本地开发环境（自带热启动）

```bash
npm serve
```

## 浏览器支持

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |

## 参与贡献

FeiWen Zheng

## License

[MIT License](https://github.com/zhengfeiwen/hs-elementui-docs/blob//blob/master/LICENSE)
