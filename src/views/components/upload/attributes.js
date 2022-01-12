export const attributes = [
  {
    prop: 'action',
    desc: '必选参数，上传的地址',
    type: 'string',
    enum: '',
    default: '—',
    config: true
  },
  {
    prop: 'headers',
    desc: '设置上传的请求头部',
    type: 'object',
    enum: '—',
    default: '—'
  },
  {
    prop: 'multiple',
    desc: '是否支持多选文件',
    type: 'boolean',
    enum: '—',
    default: '—'
  },
  {
    prop: 'data',
    desc: '上传时附带的额外参数',
    type: 'object',
    enum: '—',
    default: '—'
  },
  {
    prop: 'name',
    desc: '上传的文件字段名',
    type: 'string',
    enum: '—',
    default: 'file'
  },
  {
    prop: 'with-credentials',
    desc: '支持发送 cookie 凭证信息',
    type: 'boolean',
    enum: '—',
    default: 'FALSE'
  },
  {
    prop: 'show-file-list',
    desc: '是否显示已上传文件列表',
    type: 'boolean',
    enum: '—',
    default: 'TRUE'
  },
  {
    prop: 'drag',
    desc: '是否启用拖拽上传',
    type: 'boolean',
    enum: '—',
    default: 'FALSE'
  },
  {
    prop: 'accept',
    desc: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
    type: 'string',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-preview',
    desc: '点击文件列表中已上传的文件时的钩子',
    type: 'function(file)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-remove',
    desc: '文件列表移除文件时的钩子',
    type: 'function(file, fileList)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-success',
    desc: '文件上传成功时的钩子',
    type: 'function(response, file, fileList)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-error',
    desc: '文件上传失败时的钩子',
    type: 'function(err, file, fileList)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-progress',
    desc: '文件上传时的钩子',
    type: 'function(event, file, fileList)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-change',
    desc: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
    type: 'function(file, fileList)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'before-upload',
    desc: '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。',
    type: 'function(file)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'before-remove',
    desc: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。',
    type: 'function(file, fileList)',
    enum: '—',
    default: '—'
  },
  {
    prop: 'list-type',
    desc: '文件列表的类型',
    type: 'string',
    enum: 'text/picture/picture-card',
    default: 'text'
  },
  {
    prop: 'auto-upload',
    desc: '是否在选取文件后立即进行上传',
    type: 'boolean',
    enum: '—',
    default: 'TRUE'
  },
  {
    prop: 'file-list',
    desc: '上传的文件列表, 例如: [{name: "food.jpg", url: "https://xxx.cdn.com/xxx.jpg"}]',
    type: 'array',
    enum: '—',
    default: '[]'
  },
  {
    prop: 'http-request',
    desc: '覆盖默认的上传行为，可以自定义上传的实现',
    type: 'function',
    enum: '—',
    default: '—'
  },
  {
    prop: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    enum: '—',
    default: 'FALSE'
  },
  {
    prop: 'limit',
    desc: '最大允许上传个数',
    type: 'number',
    enum: '—',
    default: '—'
  },
  {
    prop: 'on-exceed',
    desc: '文件超出个数限制时的钩子',
    type: 'function(files, fileList)',
    enum: '—',
    default: '-'
  },
  {
    prop: 'submitBtnTxt',
    desc: '上传按钮文本',
    type: 'string',
    enum: '—',
    default: '-'
  },
  {
    prop: 'submitBtnClass',
    desc: '上传按钮样式',
    type: 'string',
    enum: '—',
    default: '-'
  }
]
