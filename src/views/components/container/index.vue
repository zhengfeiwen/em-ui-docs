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
  </index-md>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import indexMd from './index.md'
import defaultMd from './default.md'
import demo1Md from './demo1.md'
import demo1 from './demo1.vue'
import demoDefault from './default.vue'
@Component({
  name: 'hs-container',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault,
    demo1,
    demo1Md
  }
})
export default class extends Vue {
  private value = !0
  private value1 = !0
}
</script>
