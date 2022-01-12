```
<template>
  <div>
    <hs-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <i slot="ext" class="el-icon-plus"></i>
  </hs-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="" />
  </el-dialog>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo2'
})
export default class extends Vue {
  private dialogImageUrl: string = ''
  private dialogVisible: boolean = !1
  private handleRemove (file: any, fileList: any) {
    console.log(file, fileList)
  }
  private handlePictureCardPreview (file: any) {
    this.dialogImageUrl = file.url
    this.dialogVisible = true
  }
}
</script>
```