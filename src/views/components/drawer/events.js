export const events = [
  {
    prop: 'open',
    desc: '图片加载成功触发',
    callback: '-'
  },
  {
    prop: 'close',
    desc: '图片加载失败触发',
    callback: '-'
  },
  {
    prop: 'before-close',
    desc: '关闭前的回调，会暂停 Drawer 的关闭',
    callback: 'done:Event'
  }
]
