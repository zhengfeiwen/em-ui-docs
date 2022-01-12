```
<template>
  <div>
    <hs-upload action="#" list-type="picture-card" :auto-upload="false">
       <i slot="ext" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </hs-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo3'
})
export default class extends Vue {
  private dialogImageUrl: string = ''
  private dialogVisible: boolean = !1
  private disabled: boolean = !1
  handleRemove (file: any) {
    console.log(file)
  }
  handlePictureCardPreview (file: any) {
    this.dialogImageUrl = file.url
    this.dialogVisible = true
  }
  handleDownload (file: any) {
    console.log(file)
  }
}
</script>
```