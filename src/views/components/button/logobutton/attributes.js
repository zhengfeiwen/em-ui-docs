export const attributes = [
  {
    prop: 'flexStyle',
    desc: '按钮方向',
    type: 'string',
    enum: 'horizontal｜vertical',
    default: 'horizontal'
  },
  {
    prop: 'buttons',
    desc: '按钮组',
    type: 'Array',
    enum: '',
    default: '-'
  },
  {
    prop: 'button.title',
    desc: '按钮名称',
    type: 'string',
    enum: '',
    default: '-'
  },
  {
    prop: 'button.icon',
    desc: '图标名称，参考icons页面：hs-icons',
    type: 'string',
    enum: '—',
    default: '-'
  },
  {
    prop: 'slot',
    desc: '不配配置图标的情况下，可自有插入',
    type: 'template',
    enum: '—',
    default: '-'
  }
]
