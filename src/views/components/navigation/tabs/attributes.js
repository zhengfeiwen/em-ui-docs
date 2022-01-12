export const attributes = [
  {
    prop: 'tabType',
    desc: 'tab的类型',
    type: 'String',
    enum: 'divi',
    default: 'divi',
    config: true
  },
  {
    prop: 'defaultTab',
    desc: '默认展示的tab',
    type: 'Number',
    enum: '-',
    default: '0',
    config: true
  },
  {
    prop: 'tabs',
    desc: 'tab数组',
    type: 'Array<Object>',
    enum: '-',
    default: `[
      {
        id:"tab1",
        name:"tab1bane"
      },
      {
        id:"tab2",
        name:"tab2Nane"
      }
    ]`
  }
]
