<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>使用<code>type</code>,<code>plain</code>,<code>round</code>和circle属性来定义 <code>Button</code> 的样式。</p>
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
        <p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
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
        <p>HsIconbutton 组件简单设置<code>icon</code><code>desc</code>就可以使用</p>
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
        <p>设置<code>icon</code>属性即可,<code>icon</code> 的列表可以参考 <code>Element</code> 的 <code>icon</code> 组件，也可以设置在文字右边的 <code>icon</code> ，只要使用<code>i</code>标签即可，可以使用自定义图标。</p>
        <p>要设置为 <code>loading</code> 状态,只要设置<code>loading</code>属性为<code>true</code>即可。</p>
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
        <p>使用<code>el-button-group</code>标签来嵌套你的按钮</p>
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
        <p>额外的尺寸:<code>medium</code>,<code>small</code>,<code>mini</code>,通过设置<code>size</code>属性来配置它们。</p>
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
  name: 'hs-button',
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
  private value = true
  private value1 = true
}
</script>
<style lang="scss">
.hs-row{
  margin-bottom: 20px;
}

</style>
