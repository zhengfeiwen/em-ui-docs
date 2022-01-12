<template>
  <simple-container @on-query="onQuery" @on-reset="onReset" :more="false">
    <template slot="query">
      <el-form ref="form" :model="form" label-width="98px" :inline="true">
        <el-form-item label="查询条件1">
          <dict-select :val.sync="form.xxx" constant-group-name="xxx" @change="xxxChange"></dict-select>
        </el-form-item>
        <el-form-item label="查询条件2">
          <dict-select ref="study" :option="options.xxx" :prop="{ key: 'id', value: 'xxx' }" :val.sync="form.xxx"></dict-select>
        </el-form-item>
        <el-form-item label="查询条件3">
          <hs-input
            size="mini"
            v-model="form.schoolCode"
            placeholder="请输入查询条件3"
          ></hs-input>
        </el-form-item>
      </el-form>
    </template>
    <template>
      <simple-table ref="hsTable" :columnable="false" :export-name="exportName" :exportable="exportable" :export-columns="columns" :index="true" :isCheckbox="false" :data="tableData" :columns="columns" :loading="loading" :pagination.sync="pagination" @query="onQuery" @row-dbclick="showDetail" :dicts="['status', 'business']">
        <template slot="operator" slot-scope="{ scope }">
          <hs-button
            @click.native.prevent="showDetail(scope.row)"
            type="text"
            size="small">
            详情
          </hs-button>
        </template>
        <template slot="action-block">
          <hs-button type="danger" @click="onExport" icon="hs-icon-download" size="mini">导出</hs-button>
        </template>
      </simple-table>
    </template>
    <detail-dialog title="详情" :data="detailData" :visible.sync="visible"  :dicts="['status', 'business']"></detail-dialog>
  </simple-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SimpleTable from '@/components/busi/table/simple-table.vue'
import DetailDialog from '@/components/busi/table/detail.vue'
import DictSelect from '@/components/busi/custom/dictselect.vue'
import DialogSelect from '@/components/busi/custom/dialogselect.vue'
import SimpleContainer from '@/components/container/index.vue'
@Component({
  name: 'templateCLassName',
  components: {
    SimpleTable,
    SimpleContainer,
    DetailDialog,
    DictSelect,
    DialogSelect
  }
})
export default class templateCLassName extends Vue {
  private form: any = { status: 1, study: '' }

  // 加载标准
  private loading = false

  // 表格数据
  private tableData = {
    list: [],
    totalCount: -1
  }

  // 表格列
  private columns = [{
    prop: 'schoolCode',
    label: '院校代码'
  }]

  // 重置
  private onReset () {
    // .todo
  }

  // 激活后钩子
  activated () {
    // .todo
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
