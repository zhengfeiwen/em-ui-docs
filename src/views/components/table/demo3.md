```
<template>
  <hs-table
    :row-class-name="tableRowClassName"
    :data="tableData"
    style="width: 100%">
    <hs-table-column
      prop="date"
      label="日期"
      width="180">
    </hs-table-column>
    <hs-table-column
      prop="name"
      label="姓名"
      width="180">
    </hs-table-column>
    <hs-table-column
      prop="address"
      label="地址">
    </hs-table-column>
  </hs-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo3'
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

  private tableRowClassName (table: any) {
    const { rowIndex } = table
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }
}
</script>

<style lang="scss">
 .hs-table .warning-row {
    background: oldlace;
  }

  .hs-table .success-row {
    background: #f0f9eb;
  }
</style>
```