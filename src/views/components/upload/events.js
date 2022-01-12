export const events = [
  {
    prop: 'clearFiles',
    desc: '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
    callback: '-'
  },
  {
    prop: 'abort',
    desc: '取消上传请求',
    callback: '（ file: fileList 中的 file 对象 ）'
  },
  {
    prop: 'submit',
    desc: '手动上传文件列表',
    callback: '-'
  },
  {
    prop: 'beforeSubmit',
    desc: '上传文件之前',
    callback: '（ file: fileList 中的 file 对象 ）'
  }
]
