<template>
  <div>
    <hs-plupload
      :url="url"
      custom="card"
      :FilesAdded="filesAdded"
      drop_element="drag-area"
      @inputUploader="inputUploader"
    />
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { FileUrl } from 'hs-elementui/src/utils/commons'
@Component({
  name: 'demo6'
})
export default class extends Vue {
  private url = 'http://192.168.0.123:3000/upload'
  private files = []
  private up: any = {}
  private images: any[] = []
  private changed = !1

  @Watch('changed')
  private changeChanged() {
    const images: any[] = []
    this.files.forEach((e: any) => {
      images.push({ src: e.imgsrc, file: e })
    })
    this.images = images
  }

  private inputUploader(up: any) {
    this.up = up
    this.files = up.files
  }

  private filesAdded(up: any, files: any) {
    files.forEach((f: any) => {
      // eslint-disable-next-line handle-callback-err
      FileUrl(f.getNative(), (err: any, imgsrc: any) => {
        f.imgsrc = imgsrc
        this.changed = !this.changed
      })
    })
  }

  private deleteFile(index: any, file: any) {
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
