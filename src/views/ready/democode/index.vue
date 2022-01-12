<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        下面代码是组件<code>default</code>介绍
        <template v-slot:source>
          <demo-default></demo-default>
        </template>
        <template v-slot:highlight>
          <default-md></default-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo1>
      <demo-block>
        下面代码是组件<code>demo1</code>介绍
        <template v-slot:source>
          <demo1></demo1>
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
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import indexMd from './index.md'
import defaultMd from './default.md'
import demo1Md from './demo1.md'
import demo1 from './demo1.vue'
import demoDefault from './default.vue'
const { attributes } = require('./attributes.js')
const { events } = require('./events.js')
@Component({
  name: 'hs-democode',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo1Md
  }
})
export default class extends Vue {
  private events:any = events
  private attributes:any = attributes
}
</script>
