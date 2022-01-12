<template>
  <div class="contain-container">
    <div class="c-silder" title="height: 100%;width: 208px">
      <div class="c-logo" title="height: 50px;width: 208px">LOGO</div>
      <div class="c-silder-menu" title="height: calc(100% - 50px);width: 208px">侧边栏</div>
    </div>
    <div class="c-app-main">
      <div class="c-header" title="height: 50px;width: calc( 100% - 208px)">Header</div>
      <div class="c-tag-view" title="height: 30px;width: calc( 100% - 208px)"></div>
      <div class="c-container-main" title="height: auto;width: calc( 100% - 208px);padding: 10px;">
        <div class="c-title" title="height: 50px;width: 100%">内容标题栏</div>
        <div class="c-query" title="height: auto;width: 100%">搜索区/共用信息区<span style="color: #F43F63; font-size: 18px;display: block;">高度根据具体内容而定！</span></div>
        <div class="c-main" title="height: auto;width: 100%">
          主内容区
          <p>间距为10px</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'hs-border',
  components: {
  }
})
export default class extends Vue {
  private src = require('../../../assets/statics/rule/container.png')
}
</script>

<style lang="scss" scoped>
  div{
    text-align: center;
    font-size: 22px;
    font-weight: bolder;
  }
  .contain-container{
    height: 700px;
    width: 1150px;
    display: flex;
    .c-silder{
      height: 100%;
      width: 208px;
      .c-logo{
        height: 50px;
        width: 208px;
        background-color: #F43F63;
      }
      .c-silder-menu{
        height: calc(100% - 50px);
        width: 208px;
        background-color: #9D6D6D;
      }
    }
    .c-app-main{
      height: 100%;
      width: calc(100% - 208px);
      .c-header{
        width: 100%;
        height: 50px;
        background-color: #E8CFCF;
      }
      .c-tag-view{
        width: 100%;
        height: 30px;
        background-color: #D0DEFF;
      }
      .c-container-main{
        width: 100%;
        height: calc(100% - 80px);
        padding: 10px;
        background-color: #d9d9d9;
        .c-title{
          width: 100%;
          height: 50px;
          border-radius: 5px;
          margin-bottom: 10px;
          background-color: #fff;
        }
        .c-query{
          width: 100%;
          min-height: 100px;
          border-radius: 5px;
          margin-bottom: 10px;
          background-color: #fff;
        }
        .c-main{
          width: 100%;
          min-height: calc(100% - 170px);
          border-radius: 5px;
          background-color: #fff;
        }
      }
    }
  }
</style>
