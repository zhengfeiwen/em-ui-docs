<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>在<code>hs-checkbox</code>元素中定义<code>v-model</code>绑定变量，单一的<code>checkbox</code>中，默认绑定变量的值会是<code>Boolean</code>，选中为<code>true</code>。</p>
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
        <p>设置<code>disabled</code>属性即可。</p>
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
        <p><code>checkbox-group</code>元素能把多个 checkbox 管理为一组，只需要在 Group 中使用<code>v-model</code>绑定<code>Array</code>类型的变量即可。 <code>hs-checkbox</code> 的 <code>label</code>属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。<code>label</code>与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>
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
        <p>只需要把<code>hs-checkbox</code>元素替换为<code>hs-checkbox-button</code>元素即可。此外，Element 还提供了<code>size</code>属性。</p>
        <template v-slot:source>
          <demo5></demo5>
        </template>
        <template v-slot:highlight>
          <demo5-md></demo5-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo6>
      <demo-block>
        <p>设置<code>border</code>属性可以渲染为带有边框的多选框。</p>
        <template v-slot:source>
          <demo6></demo6>
        </template>
        <template v-slot:highlight>
          <demo6-md></demo6-md>
        </template>
      </demo-block>
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
import demo2Md from './demo2.md'
import demo2 from './demo2.vue'
import demo3Md from './demo3.md'
import demo3 from './demo3.vue'
import demo4Md from './demo4.md'
import demo4 from './demo4.vue'
import demo5Md from './demo5.md'
import demo5 from './demo5.vue'
import demo6Md from './demo6.md'
import demo6 from './demo6.vue'
@Component({
  name: 'hs-card',
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
    demo5Md,
    demo6,
    demo6Md
  }
})
export default class extends Vue {
  private value = !0
  private value1 = !0
}
</script>
