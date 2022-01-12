export const attributes = [
  {
    prop: 'percentage',
    desc: '百分比（必填）',
    type: 'number',
    enum: '0-100',
    default: '0'
  },
  {
    prop: 'type',
    desc: '进度条类型',
    type: 'string',
    enum: 'line/circle/dashboard',
    default: 'line'
  },
  {
    prop: 'stroke-width',
    desc: '进度条的宽度，单位 px',
    type: 'number',
    enum: '—',
    default: '6'
  },
  {
    prop: 'text-inside',
    desc: '进度条显示文字内置在进度条内（只在 type=line 时可用）',
    type: 'boolean',
    enum: '—',
    default: 'FALSE'
  },
  {
    prop: 'status',
    desc: '进度条当前状态',
    type: 'string',
    enum: 'success/exception/warning',
    default: '—'
  },
  {
    prop: 'color',
    desc: '进度条背景色（会覆盖 status 状态颜色）',
    type: 'string/function/array',
    enum: '—',
    default: '“”'
  },
  {
    prop: 'width',
    desc: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
    type: 'number',
    enum: '',
    default: '126'
  },
  {
    prop: 'show-text',
    desc: '是否显示进度条文字内容',
    type: 'boolean',
    enum: '—',
    default: 'TRUE'
  },
  {
    prop: 'stroke-linecap',
    desc: 'circle/dashboard 类型路径两端的形状',
    type: 'string',
    enum: 'butt/round/square',
    default: 'round'
  },
  {
    prop: 'taskChains(作废)',
    desc: '定时按任务链顺序执行任务',
    type: 'object',
    enum: '-',
    default: '-'
  },
  {
    prop: 'interval',
    desc: '任务链定时执行间隔',
    type: 'number',
    enum: '-',
    default: '30s'
  }
]
