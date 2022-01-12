// 与Api名称保持高度一致

const dict: any = {
  getStudent: {
    stuSubjectCode: 'subjectCode',
    stuSubjectName: 'subjectName'
  }
}

export const adapter = (key : string, params :any, option: any = {}) => {
  if (!dict[key]) {
    console.error('暂无此字典：' + key)
    return params
  }
  const adapterKeys = dict[key]
  Object.keys(adapterKeys).map((inKey: string) => {
    const outKey = adapterKeys[inKey]
    params[outKey] = params[inKey]
    if (option.replace) {
      delete params[inKey]
    }
  })
  return params
}
