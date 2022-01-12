```
<template>
  <div>
    <hs-plupload
        browseButton="browseButton_big"
        :url="url + '/BigFile/'"
        chunkSize="2MB"
        :filters="{prevent_duplicates:true}"
        :FilesAdded="filesAdded"
        :BeforeUpload="beforeUpload"
        @inputUploader="inputUploader"
    />
    <hs-button type="primary" id="browseButton_big">选择多个文件</hs-button>
    <br/>
    <hs-table
      :data="tableData"
      style="width: 100%; margin: 10px 10px;">
      <hs-table-column
        label="文件名">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </hs-table-column>
      <hs-table-column
        label="大小">
        <template slot-scope="scope">
          <span>{{scope.row.size}}</span>
        </template>
      </hs-table-column>
      <hs-table-column
        label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.status === -1">正在计算MD5</span>
          <span v-if="scope.row.status === 1">MD5计算完成，准备上传</span>
          <span v-if="scope.row.status === 4" style="color: brown">上传失败</span>
          <span v-if="scope.row.status === 5" style="color: chartreuse">已上传</span>
          <hs-progress v-if="scope.row.status === 2" :text-inside="true" :stroke-width="20" :percentage="scope.row.percent"></hs-progress>
        </template>
      </hs-table-column>
      <hs-table-column
        label="操作">
        <template slot-scope="scope">
          <hs-button type="danger" @click="deleteFile(scope.row.id)">删除</hs-button>
        </template>
      </hs-table-column>
    </hs-table>
    <br/>
    <hs-button type="danger" @click="up.start()">开始上传</hs-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { FileMd5 } from 'hs-elementui/src/utils/commons'

@Component({
  name: 'demo2'
})
export default class extends Vue {
  private url = ''
  private files = []
  private up: any = {}
  private tableData:any[] = []
  get status () {
    const files = this.files.length > 0 ? this.files[0] : null
    return files ? (files as any).status : null
  }

  @Watch('files', { deep: !0 })
  private changeFiles () {
    this.tableData = []
    this.files.forEach((e: any) => {
      this.tableData.push({
        name: e.name,
        size: e.size,
        status: e.status,
        id: e.id,
        percent: e.percent
      })
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private inputUploader (up: any) {
    this.up = up
    this.files = up.files
  }

  private filesAdded (up: any, files: any) {
    files.forEach((f: any) => {
      f.status = -1
      FileMd5(f.getNative(), (e: any, md5: any) => {
        f.md5 = md5
        f.status = 1
      })
    })
  }

  private deleteFile (id: any) {
    const file = this.up.getFile(id)
    this.up.removeFile(file)
  }

  private beforeUpload (up: any, file: any) {
    up.setOption('multipart_params', { size: file.size, md5: file.md5 })
  }
}
</script>
```