```
<template>
  <div>
    <hs-plupload
      :url="url + '/File/'"
      :FilesAdded="filesAdded"
      drop_element="drag-area"
      @inputUploader="inputUploader"
    />
    <br/>
    <br/>
    <hs-tag type="warning">图片预览区域,也可以拖拽进去</hs-tag>
    <br/>
    <br/>
    <hs-row style="height: 360px; width: 100%; background-color: honeydew" id="drag-area">
      <hs-col style="margin: 20px 20px" :span="4" v-for="(image, index) in images" :key="index" :offset="index > 0 ? 1 : 0">
        <hs-card :body-style="{ padding: '0px' }">
          <img width="60px" height="80px" :src="image.src" class="image">
          <div style="padding: 3px; display: flex">
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
  name: 'demo6'
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
    console.log(1111)
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
<style lang="scss">
.image{
  width: 100%;
  height: 100%;
  padding: 3px;
  margin-bottom: 5px;
}
.drag-area{
  border: 1px solid #ccc;
  height: 150px;
  line-height: 150px;
  text-align: center;
  color: #aaa;
  width: 150px;
  margin: 10px auto;
}
</style>
```