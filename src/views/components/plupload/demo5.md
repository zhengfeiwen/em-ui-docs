```
<template>
  <div>
    <hs-plupload
      browseButton="browseButton"
      :url="server_config.url+'/File/'"
      :FilesAdded="filesAdded"
      @inputUploader="inputUploader"
    />
    <hs-button id="browseButton" type="primary">选择图片</hs-button>
    <br/>
    <br/>
    <hs-tag type="info">图片预览区域</hs-tag>
    <hs-row style="height: 360px; width: 100%; background-color: honeydew" >
      <hs-col style="margin: 20px 20px" :span="4" v-for="(image, index) in images" :key="index" :offset="index > 0 ? 1 : 0">
        <hs-card :body-style="{ padding: '0px' }">
          <img width="240px" height="240px" :src="image.src" class="image">
          <hr/>
          <div style="padding: 5px; display: flex">
              <div style="flex: 3; display: flex; justify-content:center;align-items:center;">
                <span v-if="image.file.status === 1" style="color: aqua;">准备上传</span>
                <span v-if="image.file.status === 4" style="color: brown">上传失败</span>
                <span v-if="image.file.status === 5" style="color: chartreuse">已上传</span>
                <hs-progress v-if="image.file.status === 2" :text-inside="true" :stroke-width="20" :percentage="image.file.percent"></hs-progress>
              </div>
              <el-button style="flex: 1" type="text" class="button" @click="deleteFile(index,image.file)">删除</el-button>
          </div>
        </hs-card>
      </hs-col>
    </hs-row>
    <br/>
    <hs-button type="danger" @click="up.start()">开始上传</hs-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { FileUrl } from 'hs-elementui/src/utils/commons'
@Component({
  name: 'demo4'
})
export default class extends Vue {
  private url = ''
  private files = []
  private up: any = {}
  private images: any[] = []
  private changed = !1

  @Watch('changed')
  private changeChanged () {
    const images: any[] = []
    this.files.forEach((e: any) => {
      images.push({ src: e.imgsrc, file: e })
    })
    this.images = images
  }

  private inputUploader (up: any) {
    this.up = up
    this.files = up.files
  }

  private filesAdded (up: any, files: any) {
    files.forEach((f: any) => {
      // eslint-disable-next-line handle-callback-err
      FileUrl(f.getNative(), (err: any, imgsrc: any) => {
        f.imgsrc = imgsrc
        this.changed = !this.changed
      })
    })
  }

  private deleteFile (index: any, file: any) {
    this.images.splice(index, 1)
    this.up.removeFile(file)
  }
}
</script>
```