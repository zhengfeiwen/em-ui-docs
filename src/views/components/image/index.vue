<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>HsImage 组件只要配置了<code>src</code>就可以最低程度的使用了</p>
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
        <p>支持配置未加载完成与加载失败的效果<code>slot='placeholder'</code>，<code>slot='error'</code>配置即可</p>
        <template v-slot:source>
          <demo1></demo1>
        </template>
        <template v-slot:highlight>
          <demo1-md></demo1-md>
        </template>
      </demo-block>
    </template>
     <template v-slot:demo2>
      <demo-block>
        <p>支持图片的懒加载模式<code>lazy</code></p>
        <template v-slot:source>
          <demo2></demo2>
        </template>
        <template v-slot:highlight>
          <demo2-md></demo2-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:table>
      <document-table title="属性" :data="attributes"></document-table>
      <document-table title="插槽" :data="slot"></document-table>
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
import demo2Md from './demo2.md'
import demo2 from './demo2.vue'
import demoDefault from './default.vue'
const { attributes } = require('./attributes.js')
const { events } = require('./events.js')
const { slot } = require('./slot.js')
@Component({
  name: 'hs-image',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo1Md,
    demo2,
    demo2Md
  }
})
export default class extends Vue {
  private events:any = events
  private slot:any = slot
  private attributes:any = attributes
  private value = !0
  private value1 = !0
}
</script>
