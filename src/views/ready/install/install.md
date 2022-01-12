### 安装
#### 0.安装镜像源管理工具
```
> npm install -g nrm
> nrm use taobao 或者 nrm use cnpm
```
#### 1.公司框架脚手架
```
> npm i hongshen-cli -g
```
#### 2.创建项目 xxxx为项目名
```
> hs init template xxxx
```
#### 3.依赖安装
```
> cd ./xxxx
> npm i
> npm install hs-elementui -s
```
#### 4.运行系统
```
> npm run serve:mock --mock环境
> npm run serve --开发环境
```
基于`element-ui v2.14.1`开发，如出现组件显示异常，请确保版本兼容
### 配置  
#####加载组件配置
在 `main.ts` 中写入以下内容：
```
import Vue from 'vue';
import App from './App.vue';

import HsElementui from 'hs-elementui'
import 'hs-elementui/src/icons/components'
import 'hs-elementui/lib/hs-elementui.css'

Vue.use(HsElementui)
```
之后就可以使用组件库中的组件了。


