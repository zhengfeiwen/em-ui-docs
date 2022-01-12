<template>
  <index-md>
    <template v-slot:defalutDemo>
      <demo-block>
        <template v-slot:source>
          <hs-date-picker></hs-date-picker>
        </template>
        <template v-slot:highlight>
          <defaultDemo-md></defaultDemo-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo1>
      <demo-block>
        <p>切换日期事件操作<code>@change</code>事件</p>
        <template v-slot:source>
          <hs-date-picker size="large" @change="daterangeHandle"></hs-date-picker>
        </template>
        <template v-slot:highlight>
          <demo1-md></demo1-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:table>
      <document-table title="属性" :data="attributes"></document-table>
      <document-table
        title="事件"
        type="Events"
        :data="events"
      ></document-table>
    </template>
  </index-md>
</template>
<script>
import indexMd from './index.md'
import defaultDemoMd from './defaultDemo.md'
import demo1Md from './demo1.md'
const { attributes } = require('./attributes.js')
const { events } = require('./events.js')

export default {
  name: 'datepicker',
  components: {
    defaultDemoMd,
    demo1Md,
    indexMd
  },
  data() {
    return {
      attributes,
      events,
      curTab: 'documentary',
      tabs: [
        {
          id: 'documentary',
          name: '跟单数据'
        },
        {
          id: 'booking',
          name: '订单数据'
        }
      ],
      defaultTab: 1,
      tab1s: [
        {
          id: 'fulltime',
          name: '全日制'
        },
        {
          id: 'mateur',
          name: '业余'
        }
      ],
      activeTab: {
        fulltime: 'resourcepool active',
        mateur: 'resourcepool '
      }
    }
  },
  methods: {
    daterangeHandle: function(dateVal) {
      dateVal = dateVal || ''
      // doing someing
      console.log(`日期控件当前日期值为：${dateVal}`)
    }
  }
}
</script>

<style>
.resourcepool {
  display: none;
  width: 100%;
  height: 100px;
  padding: auto;
  text-align: center;
  border: 1px #d9d9d9 solid;
}
.resourcepool.active {
  display: block;
}

.el-picker-panel__body .el-date-range-picker__time-header .el-date-range-picker__editors-wrap .el-date-range-picker__time-picker-wrap .el-date-range-picker__editor{
  width:107px;
}
</style>
