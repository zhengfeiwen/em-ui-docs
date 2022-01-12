export const attributes = [
  {
    prop: 'dateType',
    desc: 'datepicker的类型',
    type: 'String',
    enum: 'datetimerange',
    default: 'datetimerange',
    config: true
  },
  {
    prop: 'rangeSeparator',
    desc: '范围日期中间词',
    type: 'String',
    enum: '-',
    default: '至',
    config: true
  },
  {
    prop: 'startPlaceholder',
    desc: '前者日期名称',
    type: 'String',
    enum: '-',
    default: '开始日期'
  },
  {
    prop: 'endPlaceholder',
    desc: '后者日期名称',
    type: 'String',
    enum: '-',
    default: '结束日期'
  },
  {
    prop: 'placeholder',
    desc: '日期输入框提示语',
    type: 'String',
    enum: '-',
    default: '请选择日期'
  },
  {
    prop: 'styles',
    desc: '日期框样式表',
    type: 'String',
    enum: '-',
    default: 'width: 330px'
  },
  {
    prop: 'defaultTime',
    desc: '默认日期值',
    type: 'Array<String>',
    enum: '-',
    default: '["00:00:00", "23:59:59"]'
  },
  {
    prop: 'valueFormat',
    desc: '日期格式',
    type: 'String',
    enum: '-',
    default: '"yyyy-MM-dd HH:mm:ss"'
  },
  {
    prop: 'shortcuts',
    desc: '快捷操作',
    type: 'Array<Object>',
    enum: '-',
    default: '详见上方hs-datepicker基础配置'
  }
]
