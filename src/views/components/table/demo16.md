```
<template>
  <hs-table
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
    <hs-table-column
      align="right">
      <template slot="header" slot-scope="">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <hs-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</hs-button>
        <hs-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</hs-button>
      </template>
    </hs-table-column>
  </hs-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo16'
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
```