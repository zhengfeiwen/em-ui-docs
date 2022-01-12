```
<template>
  <div>
    <hs-plupload
        browseButton="browseButton"
        :url="serverConfigUrl+'/File/'"
        :multi_selection="false"
        :FilesAdded="filesAdded"
        :filters="{
          mime_types : [
            { title : 'Image files', extensions : 'jpg,gif,png' },
            { title : 'Zip files', extensions : 'zip' }
          ],
          max_file_size : '400kb'
        }"
        @inputUploader="inputUploader"
      />
      <hs-button id="browseButton" type="primary">选择文件</hs-button>
      <span v-for="(file, i) in files" :key="i">{{file.name}}</span>
      <hs-button type="danger" @click="uploadStart()">开始上传</hs-button>

      <el-dialog title="正在上传" :visible.sync="dialogTableVisible">
        <hs-progress v-if="files.length>0" :text-inside="true" :stroke-width="20" :percentage="files[0].percent"></hs-progress>
      </el-dialog>
      <br/>
      <el-tag type="warning">只允许上传图片和zip文件, 最大只能上传400kb的文件</el-tag>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private serverConfigUrl = ''
  private files = []
  private up: any = {}
  private dialogTableVisible = !1
  get status () {
    const files = this.files.length > 0 ? this.files[0] : null
    return files ? (files as any).status : null
  }

  @Watch('status')
  private changeStatus () {
    if (this.status === 5) {
      this.$confirm('文件上传成功', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        this.dialogTableVisible = false
      })
    }
  }

  private filesAdded (up: any, files: any) {
    if (up.files.length > 1) {
      up.removeFile(up.files[0])
    }
  }

  private inputUploader (up: any) {
    this.up = up
    this.files = up.files
  }

  private uploadStart () {
    this.dialogTableVisible = true
    this.up.start()
  }
}
</script>
```