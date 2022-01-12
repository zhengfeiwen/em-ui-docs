<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
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
        <template v-slot:source>
          <demo2></demo2>
        </template>
        <template v-slot:highlight>
          <demo2-md></demo2-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo3>
      <demo-block>
        <p><code>theme</code>支持<code>light</code>，<code>dark</code>两种主题</p>
        <template v-slot:source>
          <demo3></demo3>
        </template>
        <template v-slot:highlight>
          <demo3-md></demo3-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo4>
      <demo-block>
        <p>只要在<code>el-table</code>元素中定义了<code>height</code>属性，即可实现固定表头的表格，而不需要额外的代码。</p>
        <template v-slot:source>
          <demo4></demo4>
        </template>
        <template v-slot:highlight>
          <demo4-md></demo4-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo5>
      <demo-block>
        <p>固定列需要使用<code>fixed</code>属性，它接受 <code>Boolean</code> 值或者<code>leftright</code>，表示左边固定还是右边固定。</p>
        <template v-slot:source>
          <demo5></demo5>
        </template>
        <template v-slot:highlight>
          <demo5-md></demo5-md>
        </template>
      </demo-block>
    </template>
  </index-md>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import indexMd from './index.md'
import defaultMd from './default.md'
import demoDefault from './default.vue'
import demo1Md from './demo1.md'
import demo1 from './demo1.vue'
import demo2Md from './demo2.md'
import demo2 from './demo2.vue'
import demo3Md from './demo3.md'
import demo3 from './demo3.vue'
import demo4Md from './demo4.md'
import demo4 from './demo4.vue'
import demo5Md from './demo5.md'
import demo5 from './demo5.vue'
@Component({
  name: 'hs-chart',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo1Md,
    demo2,
    demo2Md,
    demo3,
    demo3Md,
    demo4,
    demo4Md,
    demo5,
    demo5Md
  }
})
export default class extends Vue {
  private value = !0
  private value1 = !0
}
</script>
<style lang="scss">
  .chart-body{
    height: 300px;
    width: 60%;
    margin: auto;
  }
</style>
