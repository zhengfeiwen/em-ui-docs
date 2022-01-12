export const attributes = [
  {
    prop: 'src',
    desc: '图片源，同原生',
    type: 'string',
    enum: '-',
    default: '-'
  },
  {
    prop: 'lazy',
    desc: '是否开启懒加载',
    type: 'boolean',
    enum: 'true|false',
    default: 'false'
  },
  {
    prop: 'z-index',
    desc: '设置图片预览的z-index',
    type: 'number',
    enum: '-',
    default: '2000'
  },
  {
    prop: 'preview-src-list',
    desc: '开启图片预览功能',
    type: 'Array',
    enum: '-',
    default: '-'
  }
]
