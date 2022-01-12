<template>
  <hs-table
    :data="tableData"
    style="width: 100%">
    <hs-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="hs-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </hs-table-column>
    <hs-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </hs-table-column>
    <hs-table-column label="操作">
      <template slot-scope="scope">
        <hs-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</hs-button>
        <hs-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</hs-button>
      </template>
    </hs-table-column>
  </hs-table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo13'
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
