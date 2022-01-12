```
<template>
  <hs-table
    ref="multipleTable"
    :data="tableData"
    style="width: 100%"
    row-key="cno"
    border
    :show-header="true"
    :highlight-current-row="false"
    :row-class-name="tableRowClassName"
    max-height="500"
    :cell-style="{padding:'5px 0'}"
    :span-method="arraySpanMethod"
    @selection-change="handleSelectionChange"
    lazy
    :load="load"
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <hs-table-column
      type="selection"
      width="55">
    </hs-table-column>
    <hs-table-column
      prop="cno"
      label="自编号">
        <template slot-scope="scope">
          <span  v-if="scope.row.hasChildren">
            父编号1111：360352姓名：黄人人Tel：15832******分裂条数：1总跟单状态：已报名来源：地区：null录入者：杨欣录入时间：{{ scope.row.date }}
          </span>
          <span v-else>{{ scope.row.date }}</span>
        </template>
    </hs-table-column>
    <hs-table-column
      prop="status"
      label="跟单状态111"
      align="right">
    </hs-table-column>
    <hs-table-column
      prop="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
      label="一访时间">
    </hs-table-column>
    <hs-table-column
      prop="desc"
      label="一访情况"
      label-class-name="zfw">
    </hs-table-column>
    <hs-table-column
      prop="cnt"
      label="无效次数">
    </hs-table-column>
</hs-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { cellCallbackParams } from 'hs-elementui/src/utils/types/table'
@Component({
  name: 'demo20'
})
export default class extends Vue {
  private tableData = [{
    cno: 101,
    date: '12021-01-01',
    name: '王小虎',
    status: '无效',
    cnt: 15,
    index: 1,
    desc: '1上海市普陀区金沙江路 1518 弄',
    hasChildren: true
  }, {
    cno: 102,
    date: '12021-01-01',
    name: '王中虎',
    status: '无效',
    index: 1,
    cnt: 15,
    desc: '2上海市普陀区金沙江路 1517 弄',
    hasChildren: true
  }, {
    cno: 103,
    date: '12021-01-01',
    name: '王大虎',
    status: '无效',
    index: 1,
    cnt: 15,
    desc: '3上海市普陀区金沙江路 1519 弄',
    hasChildren: true
  }]

  private tableRowClassName (table: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { row, rowIndex } = table
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return ''
    }
    return ''
  }

  private indexMethod (index: number) {
    return index * 2
  }

  private handleSelectionChange (val: any) {
    console.log(val)
  }

  private filterHandler (value: any, row: any, column: any) {
    const property = column.property
    return row[property] === value
  }

  private load = function (tree:any, treeNode:any, resolve:any) {
    setTimeout(() => {
      resolve([
        {
          cno: tree.cno * 10 + 1,
          date: '6',
          name: '王小22虎',
          cnt: 15,
          status: '无效',
          desc: '上海市普陀区金沙江路 1519 弄'
        }, {
          cno: tree.cno * 10 + 2,
          date: '5',
          name: '王小虎',
          status: '无效',
          cnt: 15,
          desc: '上海市普陀区金沙江路 1519 弄'
        }
      ])
    }, 1000)
  }

  private arraySpanMethod = function (cellCallbackParams: cellCallbackParams) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { row, column, rowIndex, columnIndex } = cellCallbackParams
    if (row.hasChildren) {
      if (columnIndex === 1) {
        return [1, 6]
      } else if (columnIndex === 0) {
        return [1, 1]
      } else {
        return [0, 0]
      }
    }
  }
}
</script>

<style lang="scss">
</style>
```