```
<template>
  <div>
    <hs-progress
      type="dashboard"
      :percentage="percentage"
      :color="customColors"
    ></hs-progress>
    <div>
      <hs-button-group>
        <hs-button icon="el-icon-minus" @click="decrease"></hs-button>
        <hs-button icon="el-icon-plus" @click="increase"></hs-button>
      </hs-button-group>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo4'
})
export default class extends Vue{
  private percentage: number =  10
  private customColors: object[] = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
  ]
  private increase () {
    this.percentage += 10
    if (this.percentage > 100) {
      this.percentage = 100
    }
  }
  private decrease () {
    this.percentage -= 10
    if (this.percentage < 0) {
      this.percentage = 0
    }
  }
}
</script>
```