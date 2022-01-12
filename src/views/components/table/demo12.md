```
<template>
  <div>
    <hs-button @click="resetDateFilter">清除日期过滤器</hs-button>
    <hs-button @click="clearFilter">清除所有过滤器</hs-button>
    <hs-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <hs-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      >
      </hs-table-column>
      <hs-table-column
        prop="name"
        label="姓名"
        width="180">
      </hs-table-column>
      <hs-table-column
        prop="address"
        label="地址"
        :formatter="formatter">
      </hs-table-column>
      <hs-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </hs-table-column>
    </hs-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo12'
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

  public $refs!: {
    filterTable: any
  };

  private resetDateFilter () {
    this.$refs.filterTable.clearFilter()
  }

  private clearFilter () {
    this.$refs.filterTable.clearFilter()
  }

  private formatter (row: any, column: any) {
    return row.address
  }

  private filterTag (value: any, row: any) {
    return row.tag === value
  }

  private filterHandler (value: any, row: any, column: any) {
    const property = column.property
    return row[property] === value
  }
}
</script>

<style lang="scss">
</style>
```