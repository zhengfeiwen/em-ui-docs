#HsTabs Tab导航栏组件
组件会根据属性`tabs`自动生成对应个数的tab页面

###Default
展示`默认`Tab，根据`tabType`来决定使用哪一种`tab`，并且支持响应切换事件

<slot name="defalutDemo"></slot>

###hs-tabs标签展示内容设置
`hs-tabs`的展示内容可以通过`tabs`来设置，支持持以下内容，还支持配置默认显示某一tab页面`:defaultTab="1"`
```
defaultTab: 1,
tabs: [
  {
    id: 'documentary',
    name: '跟单数据'
  },
  {
    id: 'booking',
    name: '订单数据'
  }
]
```


<slot name="demo1"></slot>

###@change事件
可以通过`@change`设置tab切换事件。
```
methods: {
  tabChange: function (id) {//id为tabs中的id
    // doing someing
  }
}
```

<slot name="table"></slot>