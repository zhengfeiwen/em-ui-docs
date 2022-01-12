```
<template>
  <div>
    <hs-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="70"
    ></hs-progress>
    <hs-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    ></hs-progress>
    <hs-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    ></hs-progress>
    <hs-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    ></hs-progress>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo1'
})
export default class extends Vue{
}
</script>
<style lang='scss' scoped>
.hs-progress{
  margin-bottom: 20px;
}
</style>
```