# HsChart 图标
基于EChart 的一种多元化图标组件（目前有折线，柱状，饼图等）

### 折线图

<slot name="default"></slot>

### 柱状图
<slot name="demo1"></slot>

### 饼图
<slot name="demo2"></slot>

#### 主题定制
#### `theme`属性支持`light`，`dark`两种主题
<slot name="demo3"></slot>

### 条纹定制
#### `color`属性配置颜色组，图表将按序使用
<slot name="demo4"></slot>

### 分组联动
<slot name="demo5"></slot>

## 属性
| 参数    | 说明         |  类型   | 可选值 | 默认值 |
| :------ | :----------- | :-----: | :----: | :----: |
| option  | 参数         | object  |   —    |   0    |
| theme   | 主题         | string  |   —    | light  |
| dispose | 是否销毁图表 | boolean |        | false  |
| group   | 分组         | string  |        |   -    |
| opts    | 扩展参数     | object  |   *    |   -    |
## 事件
| 事件名        |                             说明                              |  参数  |
| :------------ | :-----------------------------------------------------------: | :----: |
| click         |                             单击                              | params |
| dblclick      |                             双击                              | params |
| mousedown     |          当鼠标指针移动到元素上方，并按下鼠标左键时           | params |
| mouseup       | 当在元素上松开鼠标按键（左、右键均可）时，会发生 mouseup 事件 | params |
| mouseover     |       当鼠标指针位于元素上方时，会发生 mouseover 事件。       | params |
| mouseout      |        当鼠标指针从元素上移开时，发生 mouseout 事件。         | params |
| globalout     |                           globalout                           | params |
| contextmenu   |                          contextmenu                          | params |
| selectchanged |              在数据选中状态发生变化时触发的事件               | params |

### 具体可以参考：[ECharts >](https://echarts.apache.org/zh/api.html)