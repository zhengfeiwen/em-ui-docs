#组件标题
`component`描述，其实没什么好说的，但还是要凑一点字数

###功能1
功能1`func1`描述

<slot name="default"></slot>

###功能2
功能2`func1`描述，详细配置`attr`介绍
```
{
  attr: '1',
  name: 'demo',                // 组件名称
  meta: {
    data: {                    // 数据 
      title: 'title',          // 组件标题
      icon: 'default',         // 显示图标
    },
    attrOther: '其他配置',          // 其他配置
  },
},
```

功能2扩展配置介绍
 `attr` 你如果配置了这个，会有意外的惊喜哦

<slot name="demo1"></slot>

###扩展配置2介绍
可以通过`other`设置其他配置。
默认使用`other1`全局配置
```
other: {
  attr: '111111',
  attr1: '22222'
},
```

###某些事件1介绍
你再试试配置下`change`事件，也很好玩哦
```
methods: {
  change: function (val) {
    // doing someing
    alert('您改变了' + val)
  }
}
```
###监听某些动作的介绍，`click`来处理点击的逻辑
```
this.$ea.$on('click', item => {
  /* code */
});
```

[通过这个链接打开一个调转页面](#/install/index)


<slot name="table"></slot>

## 或者直接
## 属性 
| 参数   | 说明     |  类型  | 可选值 | 默认值 |
| :----- | :------- | :----: | :----: | :----: |
| gutter | 栅格间隔 | number |   —    |   0    |
## 事件
| 事件名 | 说明 |  参数  |
| :----- | :--- | :----: |
| click  | 点击 | params |