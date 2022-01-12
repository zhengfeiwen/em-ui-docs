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
        <template v-slot:source>
          <demo6></demo6>
        </template>
        <template v-slot:highlight>
          <demo6-md></demo6-md>
        </template>
      </demo-block>
    </template>
    <template v-slot:demo7>
      <demo-block>
        <template v-slot:source>
          <demo7></demo7>
        </template>
        <template v-slot:highlight>
          <demo7-md></demo7-md>
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

import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'

import demo1Md from './demo1.md'
import demo2Md from './demo2.md'
import demo3Md from './demo3.md'
import demo4Md from './demo4.md'
import demo5Md from './demo5.md'
import demo6Md from './demo6.md'
import demo7Md from './demo7.md'

@Component({
  name: 'hs-progress',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
    demo6,
    demo7,
    demo1Md,
    demo2Md,
    demo3Md,
    demo4Md,
    demo5Md,
    demo6Md,
    demo7Md
  }
})
export default class extends Vue {
  private value = !0
  private value1 = !0
}
</script>
