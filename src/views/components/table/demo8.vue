<template>
  <hs-table
    :data="tableData"
    style="width: 100%">
    <hs-table-column
      prop="date"
      label="日期"
      width="150">
    </hs-table-column>
    <hs-table-column label="配送信息">
      <hs-table-column
        prop="name"
        label="姓名"
        width="120">
      </hs-table-column>
      <hs-table-column label="地址">
        <hs-table-column
          prop="province"
          label="省份"
          width="120">
        </hs-table-column>
        <hs-table-column
          prop="city"
          label="市区"
          width="120">
        </hs-table-column>
        <hs-table-column
          prop="address"
          label="地址"
          width="300">
        </hs-table-column>
        <hs-table-column
          prop="zip"
          label="邮编"
          width="120">
        </hs-table-column>
      </hs-table-column>
    </hs-table-column>
  </hs-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo8'
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
}
</script>

<style lang="scss">
</style>
