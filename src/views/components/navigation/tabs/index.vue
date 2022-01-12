<template>
  <index-md>
    <template v-slot:defalutDemo>
      <demo-block>
        如果不想在<code>tabs</code>展示这个功能按钮，请传入字符串<code
          >`false`</code
        >
        <template v-slot:source>
          <hs-nav-tabs
            tabType="divi"
            :tabs="tabs"
            :defaultTab="0"
            @change="tabChange"
          ></hs-nav-tabs>
        </template>
        <template v-slot:highlight>
          <defaultDemo-md></defaultDemo-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo1>
      <demo-block>
        <p>支持通过配置<code>tabs</code>属性来调整tab展示标签</p>
        <template v-slot:source>
          <hs-nav-tabs
            tabType="divi"
            :tabs="tab1s"
            :defaultTab="defaultTab"
            @change="tabChange"
          ></hs-nav-tabs>
          <div>
            <div id="fulltime" :class="activeTab.fulltime">全日制页面</div>
            <div id="mateur" :class="activeTab.mateur">业余页面</div>
          </div>
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
  name: 'tabs',
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
    tabChange: function(id) {
      // this.curTab = id
      // alert('您选中的是' + id)
      for (const key in this.activeTab) {
        if (key === id) {
          this.activeTab[key] = 'resourcepool active'
        } else {
          this.activeTab[key] = 'resourcepool'
        }
      }
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
</style>
