```
<template>
  <hs-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    submitBtnTxt="点击上传"
    submitBtnClass="primary"
    :auto-upload="false"
  >
    <div slot="tip" class="el-upload__tip">
      只能上传jpg/png文件，且不超过500kb
    </div>
  </hs-upload>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo6'
})
export default class extends Vue {
  private fileList: object[] = [
    {
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    },
    {
      name: 'food2.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }
  ]
  private submitUpload () {
    (this.$refs.upload as any).submit()
  }
  private handleRemove (file: any, fileList: any) {
    console.log(file, fileList)
  }
  private handlePreview (file: any) {
    console.log(file)
  }
}
</script>
```