```
<template>
  <div>
    <hs-tinymce placeholder="请输入正文" menubar="" :value="tinymce" ref="editor" @input="tinymce = $event"></hs-tinymce>
    <hs-button @click="click" type="primary">获取文本内容</hs-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'hs-tinymce'
})
export default class extends Vue {
  private tinymce = ''
  private click () {
    alert(this.tinymce)
  }
}
</script>
```