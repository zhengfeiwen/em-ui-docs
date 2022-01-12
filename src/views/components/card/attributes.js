export const attributes = [
  {
    prop: 'header',
    desc: '设置 header，也可以通过 slot#header 传入 DOM',
    type: 'string',
    enum: '-',
    default: '-'
  },
  {
    prop: 'body-style',
    desc: '设置 body 的样式',
    type: 'object',
    enum: '-',
    default: '{ padding: "20px" }'
  },
  {
    prop: 'shadow',
    desc: '设置阴影显示时机',
    type: 'string',
    enum: 'always / hover / never',
    default: 'always'
  }
]
