<template>
  <div class="hs-progress_container">
    <hs-progress type="circle" :percentage="0"></hs-progress>
    <hs-progress type="circle" :percentage="25"></hs-progress>
    <hs-progress type="circle" :percentage="100" status="success"></hs-progress>
    <hs-progress type="circle" :percentage="70" status="warning"></hs-progress>
    <hs-progress
      type="circle"
      :percentage="50"
      status="exception"
    ></hs-progress>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo3'
})
export default class extends Vue {
}
</script>
<style lang='scss' scoped>
.hs-progress_container{
  display:flex;
  flex-direction: row;
  .hs-progress{
    margin-bottom: 20px;
  }
}
</style>
