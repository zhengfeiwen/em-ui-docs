<template>
  <div>
    <hs-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-exceed="handleExceed"
  >
    <div slot="tip" class="el-upload__tip">
      只能上传jpg/png文件，且不超过500kb
    </div>
  </hs-upload>
  <button @click="click">sdadsa</button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private click() {
    (this as any).$confirm('上传头像图片只能是 JPG 格式!')
  }

  private fileList = [
    {
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    },
    {
      name: 'food2.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }
  ]

  private handleRemove(file: any, fileList: any) {
    console.log(file, fileList)
  }

  private handlePreview(file: any) {
    console.log(file)
  }

  private handleExceed(files: any, fileList: any) {
    (this as any).$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
  }

  private beforeRemove(file: any) {
    return (this as any).$confirm(`确定移除 ${file.name}？`)
  }
}
</script>
