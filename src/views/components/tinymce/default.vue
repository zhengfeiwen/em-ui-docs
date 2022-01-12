<template>
  <div>
    <hs-tinymce placeholder="请输入正文" menubar="" :value="tyniVal" ref="editor" @input="tyniVal = $event"></hs-tinymce>
    <br/>
    <hs-button @click="handleClick" type="primary">获取文本内容</hs-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private tyniVal = ''
  private handleClick() {
    alert(this.tyniVal)
  }
}
</script>
