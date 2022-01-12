<template>
  <hs-table
    :data="tableData"
    style="width: 100%">
    <hs-table-column
      fixed
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
    <hs-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <hs-button @click="handleClick(scope.row)" type="text" size="small">查看</hs-button>
        <hs-button type="text" size="small">编辑</hs-button>
      </template>
    </hs-table-column>
  </hs-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo4'
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
