<template>
  <index-md>
    <template v-slot:default>
      <demo-block>
        <p>HsTinymce 富文本框组件</p>
        <template v-slot:source>
          <demo-default></demo-default>
        </template>
        <template v-slot:highlight>
          <default-md></default-md>
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
import demoDefault from './default.vue'
const { attributes } = require('./attributes.js')
const { events } = require('./events.js')

@Component({
  name: 'hs-tinymce',
  components: {
    'default-md': defaultMd,
    indexMd,
    'demo-default': demoDefault
  }
})
export default class extends Vue {
  private events:any = events
  private attributes:any = attributes
}
</script>
