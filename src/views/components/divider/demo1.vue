<template>
  <div style="width:600px;">
    <span>头上一片晴天，心中一个想念</span>
    <hs-divider content-position="left">少年包青天</hs-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <hs-divider><i class="el-icon-mobile-phone"></i></hs-divider>
    <span>为了无法计算的价值</span>
    <hs-divider content-position="right">阿里云</hs-divider>
    <div>
      <p>垂直分割</p>
      <span>雨纷纷</span>
      <el-divider direction="vertical"></el-divider>
      <span>旧故里</span>
      <el-divider direction="vertical"></el-divider>
      <span>草木深</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo1'
})
export default class extends Vue {
  private shadow = 'hover'
  private bodyStyle = {
    padding: '0px'
  }
}
</script>

<style lang="scss">
.image{
  width: 100%;
  padding: 5px;
}
</style>
