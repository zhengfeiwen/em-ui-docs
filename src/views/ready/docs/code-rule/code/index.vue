<template>
  <div class="rule-container">
    <header class="header">
      <el-button style="float:rigth;" type="info" plain @click="$router.back(-1)">返回</el-button>
      <hs-tabs v-model="activeName">
        <hs-tab-pane label="HTML" name="html"></hs-tab-pane>
        <hs-tab-pane label="JavaScript" name="javascript"></hs-tab-pane>
        <hs-tab-pane label="CSS" name="css"></hs-tab-pane>
      </hs-tabs>
    </header>
    <section>
      <component :is="activeName + 'Md'"></component>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import htmlMd from './details/html.md'
import javascriptMd from './details/javascript.md'
import cssMd from './details/css.md'

@Component({
  components: {
    htmlMd,
    javascriptMd,
    cssMd
  }
})
export default class HsCodeRule extends Vue {
  private activeName = this.$route.params.id || 'html'
}
</script>

<style lang="scss">
.rule-container{
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  overflow: hidden;
  .header{
    width: 100%;
    height: 100px;
    text-align: right;
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
  section{
    height: calc(100% - 100px);
    overflow: auto;
  }
}
</style>
