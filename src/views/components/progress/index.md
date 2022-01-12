#HsProgress 进度条
用于展示操作进度，告知用户当前状态和预期。

###线形进度条

<slot name="default"></slot>

###百分比内显
百分比不占用额外控件，适用于文件上传等场景。
<slot name="demo1"></slot>

###自定义颜色
可以通过`color`设置进度条的颜色，`color`可以接受颜色字符串，函数和数组。
<slot name="demo2"></slot>

###环形进度条
HsProgress 组件可通过`type`属性来指定使用环形进度条，在环形进度条中，还可以通过`width`属性来设置其大小。

<slot name="demo3"></slot>

###仪表盘形进度条
使用`before-upload`限制用户上传的图片格式和大小。
<slot name="demo4"></slot>

<slot name="table"></slot>