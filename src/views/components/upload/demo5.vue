<template>
  <hs-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
  >
    <template slot="ext">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </template>
  </hs-upload>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo5'
})
export default class extends Vue {
}
</script>
