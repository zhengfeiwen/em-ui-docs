<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>基础布局</p>
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
        <p>分栏：支持加间隔，偏移。</p>
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
        <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
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
        <p>通过 flex 布局来对分栏进行灵活的对齐。</p>
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
        <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</p>
        <template v-slot:source>
          <demo4></demo4>
        </template>
        <template v-slot:highlight>
          <demo4-md></demo4-md>
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
import demo2Md from './demo2.md'
import demo2 from './demo2.vue'
import demo3Md from './demo3.md'
import demo3 from './demo3.vue'
import demo4Md from './demo4.md'
import demo4 from './demo4.vue'
import demoDefault from './default.vue'
@Component({
  name: 'hs-layout',
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
    demo4Md
  }
})
export default class extends Vue {
  private value = !0
  private value1 = !0
}
</script>

<style lang="scss">
.demo{
  min-height:36px;
  width: 100%;
  background-color: #e5e9f2;
  border-radius: 6px;
}
.demo-light{
  min-height:36px;
  width: 100%;
  border-radius: 6px;
  background-color: #d3dce6;
}
.hs-row{
  margin-bottom: 20px;
}
</style>
