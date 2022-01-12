<template>
  <hs-row>
    <h1>border 边框形状</h1>
    <hs-row>
      <div class="border radius">圆角边框</div>
      <div class="border radius-circle">大圆角边框</div>
      <div class="border circle">圆形边框</div>
    </hs-row>
    <h1>border 边框阴影</h1>
    <hs-row>
      <div class="border shadow">标准阴影</div>
      <div class="border shadow-sint">浅阴影</div>
    </hs-row>
  </hs-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'hs-border',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
  .border{
    height: 100px;
    width: 100px;
    line-height: 100px;
    text-align: center;
    margin-right: 20px;
    display: inline-block;
    border: 1px solid #ccc;
  }
</style>
