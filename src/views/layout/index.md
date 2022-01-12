#HsLayout 
#####通过基础的 24 分栏，迅速简便地创建布局。
****
##基本用法
#####使用单一分栏创建基础的栅格布局。
<slot name="default"></slot>

##分栏布局
#####分栏：支持加间隔，偏移混合分栏等。
<slot name="demo1"></slot>

##混合布局
#####通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<slot name="demo2"></slot>

##对齐方式
#####通过 flex 布局来对分栏进行灵活的对齐。
<slot name="demo3"></slot>

##响应式布局
#####参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。
<slot name="demo4"></slot>

##属性
####Row属性
| 参数    | 说明                                  |  类型  |                   可选值                    | 默认值 |
| :------ | :------------------------------------ | :----: | :-----------------------------------------: | :----: |
| gutter  | 栅格间隔                              | number |                      —                      |   0    |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string |                      —                      |   —    |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string |              top/middle/bottom              |  top   |
| tag     | 自定义元素标签                        | string |                      *                      |  div   |
####Col属性
| 参数   | 说明                                 |                    类型                     | 可选值 | 默认值 |
| :----- | :----------------------------------- | :-----------------------------------------: | :----: | :----: |
| span   | 栅格占据的列数                       |                   number                    |   —    |   24   |
| offset | 栅格左侧的间隔格数                   |                   number                    |   —    |   0    |
| push   | 栅格向右移动格数                     |                   number                    |   —    |   0    |
| pull   | 栅格向左移动格数                     |                   number                    |   —    |   0    |
| xs     | <768px 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) |   —    |   —    |
| sm     | ≥768px 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) |   —    |   —    |
| md     | ≥992px 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) |   —    |   —    |
| lg     | ≥1200px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) |   —    |   —    |
| xl     | ≥1920px 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) |   —    |   —    |
| tag    | 自定义元素标签                       |                   string                    |   *    |  div   |