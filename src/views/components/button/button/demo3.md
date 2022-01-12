```
<template>
  <div>
    <hs-button type="primary" icon="hs-icon-edit"></hs-button>
    <hs-button type="primary" icon="hs-icon-share"></hs-button>
    <hs-button type="primary" icon="hs-icon-delete"></hs-button>
    <hs-button type="primary" icon="hs-icon-search">搜索</hs-button>
    <hs-button type="primary">上传<i class="hs-icon-upload hs-icon--right"></i></hs-button>
    <hs-button type="primary" :loading="true">加载中</hs-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo3'
})
export default class extends Vue {
}
</script>
<style lang="scss">
</style>
```