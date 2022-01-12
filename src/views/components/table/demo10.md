```
<template>
  <div>
    <hs-table
      ref="hsTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <hs-table-column
        type="selection"
        width="55">
      </hs-table-column>
      <hs-table-column
        label="日期"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </hs-table-column>
      <hs-table-column
        prop="name"
        label="姓名"
        width="120">
      </hs-table-column>
      <hs-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </hs-table-column>
    </hs-table>
    <div style="margin-top: 20px">
      <hs-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</hs-button>
      <hs-button @click="toggleSelection()">取消选择</hs-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo10'
})
export default class extends Vue {
  private tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]

  private toggleSelection (rows: any) {
    console.log(this.$refs.hsTable, 'this.$refs.hsTable')
    if (rows) {
      rows.forEach((row: any) => {
        (this.$refs.hsTable as any).toggleRowSelection(row)
      })
    } else {
      (this.$refs.hsTable as any).clearSelection()
    }
  }

  private handleSelectionChange (val: any) {
    this.$refs.hsTable = val
  }
}
</script>

<style lang="scss">
</style>
```