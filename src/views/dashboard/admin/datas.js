export const api = {
  data: [{
    label: '组件',
    children: [{
      label: '日期',
      children: [
        {
          label: '日期选择'
        },
        {
          label: '日期范围'
        }
      ]
    },
    {
      label: '按钮'
    },
    {
      label: '图标'
    }, {
      label: '进度条'
    }, {
      label: '导航栏'
    }, {
      label: '下载'
    }]
  },
  {
    label: '业务组件',
    children: [
      {
        label: '查询条件'
      },
      {
        label: '操作按钮组'
      }
    ]
  },
  {
    label: '表单',
    children: [{
      label: '网格',
      children: [
        {
          label: '三级 3-1-1'
        },
        {
          lable: '树形网格'
        }
      ]
    }]
  }],
  props: {
    children: 'children',
    label: 'label'
  }
}

export const hot = {
  data: [{
    label: '按钮'
  }, {
    label: '图标'
  }, {
    label: '进度条'
  }, {
    label: '导航栏'
  }, {
    label: '下载'
  }],
  props: {
    children: 'children',
    label: 'label'
  }
}

export const latest = {
  data: [{
    label: '导航栏'
  }, {
    label: '下载'
  }],
  props: {
    children: 'children',
    label: 'label'
  }
}
