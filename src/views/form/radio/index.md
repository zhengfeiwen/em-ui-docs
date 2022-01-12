#HsRadio 单选框
在一组备选项中进行单选

### 基本用法
#### 由于选项默认可见，不宜过多，若选项过多，建议使用 `Select` 选择器
<slot name="default"></slot>

### 禁用状态
#### 单选框不可用的状态。
<slot name="demo1"></slot>

### 单选框组
#### 适用于在多个互斥的选项中选择的场景
<slot name="demo2"></slot>

### 按钮样式
#### 按钮样式的单选组合。
<slot name="demo3"></slot>

### 带有边框
#### 按钮带边框的空心样式
<slot name="demo4"></slot>

## Radio属性 
| 参数            | 说明                                 |           类型            |        可选值         | 默认值 |
| :-------------- | :----------------------------------- | :-----------------------: | :-------------------: | :----: |
| value / v-model | 绑定值                               | string / number / boolean |           —           |   —    |
| label           | Radio 的 value                       | string / number / boolean |           —           |   —    |
| disabled        | 是否禁用                             |          boolean          |           —           | false  |
| border          | 是否显示边框                         |          boolean          |           —           | false  |
| size            | Radio 的尺寸，仅在 border 为真时有效 |          string           | medium / small / mini |   —    |
| name            | 原生 name 属性                       |          string           |           —           |   —    |

## Radio事件
| 事件名 | 说明                   |         参数          |
| :----- | :--------------------- | :-------------------: |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |


## Radio-group属性 
| 参数            | 说明                                                       |           类型            |        可选值         | 默认值  |
| :-------------- | :--------------------------------------------------------- | :-----------------------: | :-------------------: | :-----: |
| value / v-model | 绑定值                                                     | string / number / boolean |           —           |    —    |
| size            | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 |          string           | medium / small / mini |    —    |
| disabled        | 是否禁用                                                   |          boolean          |           —           |  false  |
| text-color      | 按钮形式的 Radio 激活时的文本颜色                          |          string           |           —           | #ffffff |
| fill            | 按钮形式的 Radio 激活时的填充色和边框色                    |          string           |           —           | #409EFF |

## Radio-group事件
| 事件名 | 说明                   |         参数          |
| :----- | :--------------------- | :-------------------: |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

## Radio-button属性 
| 参数     | 说明           |      类型       | 可选值 | 默认值 |
| :------- | :------------- | :-------------: | :----: | :----: |
| label    | Radio 的 value | string / number |   —    |   —    |
| disabled | 是否禁用       |     boolean     |   —    | false  |
| name     | 原生 name 属性 |     string      |   —    |   —    |