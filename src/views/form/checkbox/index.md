#HsCheckbox 多选框
一组备选项中进行多选

### 基本用法
#### 单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox` 按钮后的介绍。
<slot name="default"></slot>

### 禁用状态
#### 多选框不可用状态。
<slot name="demo1"></slot>

### 多选框组
#### 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
<slot name="demo2"></slot>

### indeterminate状态
#### `indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
<slot name="demo3"></slot>

### 可选项目数量的限制
#### 使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。
<slot name="demo4"></slot>

### 按钮样式
#### 按钮样式的多选组合。
<slot name="demo5"></slot>

### 带有边框
#### 按钮带边框的空心样式
<slot name="demo6"></slot>

## Checkbox 属性 
| 参数            | 说明                                                              |           类型            |        可选值         | 默认值 |
| :-------------- | :---------------------------------------------------------------- | :-----------------------: | :-------------------: | :----: |
| value / v-model | 绑定值                                                            | string / number / boolean |           —           |   —    |
| label           | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean |           —           |   —    |
| true-label      | 选中时的值                                                        |      string / number      |           —           |   —    |
| false-label     | 没有选中时的值                                                    |      string / number      |           —           |   —    |
| disabled        | 是否禁用                                                          |          boolean          |           —           | false  |
| border          | 是否显示边框                                                      |          boolean          |           —           | false  |
| size            | Checkbox 的尺寸，仅在 border 为真时有效                           |          string           | medium / small / mini |   —    |
| name            | 原生 name 属性                                                    |          string           |           —           |   —    |
| checked         | 当前是否勾选                                                      |          boolean          |           —           | false  |
| indeterminate   | 设置 indeterminate 状态，只负责样式控制                           |          boolean          |           —           | false  |

## Checkbox-group 事件
| 事件名 | 说明                   |    参数    |
| :----- | :--------------------- | :--------: |
| change | 绑定值变化时触发的事件 | 更新后的值 |

## Checkbox-group 属性 
| 参数            | 说明                                                             |  类型   |        可选值         | 默认值  |
| :-------------- | :--------------------------------------------------------------- | :-----: | :-------------------: | :-----: |
| value / v-model | 绑定值                                                           |  array  |           —           |    —    |
| size            | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini |    —    |
| disabled        | 是否禁用                                                         | boolean |           —           |  false  |
| min             | 可被勾选的 checkbox 的最小数量                                   | number  |           —           |    —    |
| max             | 可被勾选的 checkbox 的最大数量                                   | number  |           —           |    —    |
| text-color      | 按钮形式的 Checkbox 激活时的文本颜色                             | string  |           —           | #ffffff |
| fill            | 按钮形式的 Checkbox 激活时的填充色和边框色                       | string  |           —           | #409EFF |

## Checkbox 事件
| 事件名 | 说明                   |    参数    |
| :----- | :--------------------- | :--------: |
| change | 绑定值变化时触发的事件 | 更新后的值 |

## Checkbox-button 属性 
| 参数        | 说明                                                              |           类型            | 可选值 | 默认值 |
| :---------- | :---------------------------------------------------------------- | :-----------------------: | :----: | :----: |
| label       | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean |   —    |   —    |
| true-label  | 选中时的值                                                        |      string / number      |   —    |   —    |
| false-label | 没有选中时的值                                                    |      string / number      |   —    |   —    |
| disabled    | 是否禁用                                                          |          boolean          |   —    | false  |
| name        | 原生 name 属性                                                    |          string           |   —    |   —    |
| checked     | 当前是否勾选                                                      |          boolean          |   —    | false  |