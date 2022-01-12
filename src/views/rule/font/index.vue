<template>
 <hs-row>
   <h1>默认字体为12px，不同权重字体样式</h1>
     <p class="ft-lv1">这是一级权重文字<code>ft-lv1</code></p>
     <p class="ft-lv2">这是二级权重文字<code>ft-lv2</code></p>
     <p class="ft-lv3">这是三级权重文字<code>ft-lv3</code></p>
     <p class="ft-lv4">这是四级权重文字<code>ft-lv4</code></p>
     <p class="ft-lv5">这是五级权重文字<code>ft-lv5</code></p>
   <h1>标题等区域文字规范</h1>
     <p class="ft-title">这是主标题<code>ft-title</code></p>
     <p class="ft-subtitle">这是次标题<code>ft-subtitle</code></p>
     <p class="ft-text">这是正文<code>ft-text</code></p>
     <p class="ft-subtext">这是正文辅助文字<code>ft-subtext</code></p>
 </hs-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'hs-font',
  components: {
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
