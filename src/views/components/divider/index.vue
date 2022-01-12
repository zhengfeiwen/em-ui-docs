<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>HsDivider 对不同章节的文本段落进行分割。</p>
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
        <p>可以在分割线上自定义文案内容。</p>
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
@Component({
  name: 'hs-divider',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo1Md
  }
})
export default class extends Vue {
  private attributes:any = attributes
  private value = !0
  private value1 = !0
}
</script>
