<template>
  <div class="container">
    <header>
      <hs-tabs v-model="activeName">
        <hs-tab-pane label="HTML" name="html"><html-md /></hs-tab-pane>
        <hs-tab-pane label="JavaScript" name="javascript"><javascript-md /></hs-tab-pane>
        <hs-tab-pane label="CSS" name="css"><css-md /></hs-tab-pane>
        <hs-tab-pane label="Image" name="image"><image-md /></hs-tab-pane>
        <hs-tab-pane label="Server" name="server"><server-md /></hs-tab-pane>
        <hs-tab-pane label="Cookie" name="cookie"><cookie-md /></hs-tab-pane>
      </hs-tabs>
    </header>
    <section></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import htmlMd from './details/html.md'
import javascriptMd from './details/javascript.md'
import cssMd from './details/css.md'
import imageMd from './details/image.md'
import serverMd from './details/server.md'
import cookieMd from './details/cookie.md'

@Component({
  components: {
    htmlMd,
    javascriptMd,
    cssMd,
    imageMd,
    serverMd,
    cookieMd
  }
})
export default class HsPerformance extends Vue {
  private activeName = this.active

  get active() {
    return this.$route.params.id || 'html'
  }
}
</script>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  header{
    width: 100%;
    height: 100%;
    .hs-tabs{
      height: 100%;
      .hs-tabs__content{
        height: calc(100% - 60px);
        overflow: auto;
        &::-webkit-scrollbar {/*滚动条整体样式*/
          width: 3px;     /*高宽分别对应横竖滚动条的尺寸*/
          height: 3px;
        }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          background: #535353;
        }
        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          border-radius: 10px;
          background: #EDEDED;
        }
        .markdown h5 {
          line-height: 2;
        }
      }
    }
  }
}
</style>
