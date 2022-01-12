
#### 一、命名规范
##### 变量与函数名统一使用驼峰命名如： `schoolId`，`onQuery`
#### 二、代码工厂化
##### 应根据业务，分析代码是否存在复用，以最小原子形式进行复用封装。如：
```
private async doStudentInfoInsert (params: StudentInfo) {
  const valid = utils.isEmpty(params, [stuName, idCard, sex])
  if (!valid.res) {
    this.$message.error(valid.message)
    return
  }
  const res = await api.studentInsert(params)
}
```
#### 二、代码耦合
##### 不同业务间的代码应保持低耦合，如：
`bad`
```
common.ts
private insert(params: any, type: string) {
  if (type === 'busi1') {
    const res = await api.busi1(params)
  } else if (type === 'busi2') {
    const res = await api.busi2(params)
  } else if (type === 'busi3') {
    const res = await api.busi3(params)
  } else if (type === 'busi4') {
    const res = await api.busi4(params)
  }
}

业务1 busi1.ts
private async insert () {
  // do something
  const res = await common.insert('busi1', this.params)
}

业务2 busi2.ts
private async insert () {
  // do something
  const res = await common.insert('busi1', this.params)
}
```
`good`
```
common.ts

export class Insert {
  private busi1 = (params: BusiParams) => api.busi1(params)

  private busi2 = (params: BusiParams) => api.busi2(params)

  private busi3 = (params: BusiParams) => api.busi3(params)

  private init (busiType, params: BusiParams) => {
    if (!busiType) {
      throw Error('undefined busiType')
    }
    return this[busiType](params)
  }
}

main.ts
private async insert () {
  // busiType = 'busi1'|'busi2'busi3'
  const res = await common.Insert.init(this.busiType, this.params)
}
```
```
common.ts
export const isEmpty (params) => {...}

export const format (params: any, dict: any) => {...}

export const api (api: string, params) => Api[api](params)

业务1 busi1.ts
private async insert () {
  common.isEmpty(this.params)
  common.format(this.params, this.dict)
  const res = await common.api(this.params)
}

业务2 busi2.ts
private async insert () {
  common.isEmpty(this.params)
  common.format(this.params, this.dict)
  const res = await common.api(this.params)
}
```