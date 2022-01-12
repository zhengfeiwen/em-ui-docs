<template>
  <hs-row>
    <hs-row>
      <h1>Color 色彩</h1>
      <h3 style="color: red;font-weight: 400;">为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。</h3>
      <h3>Color Class 规范说明</h3>
      <div class="tip">
        <p><code>$hs-theme-color</code> - theme 主题</p>
        <p><code>$hs-sub-theme-color</code> - substitute 辅助，次要</p>
        <p><code>$hs-dark-color</code> - dark 暗色调</p>
        <p><code>$hs-warm-color</code> - warm 暖色调</p>
        <p><code>$hs-light-color</code> - light 亮色调</p>
        <p><code>$hs-container-color</code> - container 内容区</p>
        <p><code>$hs-black</code> - 主标题</p>
        <p><code>$hs-black-1</code> - 次标题</p>
        <p><code>$hs-black-2</code> - 正文</p>
        <p><code>$hs-black-3</code> - 辅助文字</p>
      </div>
    </hs-row>
    <hs-row>
      <h3>场景色</h3>
      <h3 style="color: red;font-weight: 400;">在不同的场景中使用。</h3>
      <div class="demo bg-th-cl">主题色<br/>#FE4066</div>
      <div class="demo bg-sub-cl">辅助色<br/>#FF577C</div>
      <div class="demo bg-dark-cl">辅助色<br/>#1C2E52</div>
      <div class="demo bg-warm-cl">辅助色<br/>#316EFD</div>
      <div class="demo bg-light-cl">辅助色<br/>#DCE6F1</div>
      <div class="demo bg-cn-cl">辅助色<br/>#EAEAEA</div>
    </hs-row>
    <hs-row>
      <div class="demo-memo">用于主文字/主按钮</div>
      <div class="demo-memo">用于按钮/选项按钮</div>
      <div class="demo-memo">用于侧边栏底色/按钮</div>
      <div class="demo-memo">用于按钮</div>
      <div class="demo-memo">用于辅助底色</div>
      <div class="demo-memo">用于内容区大底色</div>
    </hs-row>
    <hs-row>
      <h3>文字规范</h3>
      <div class="demo ft-title">主标题<br/>#212121</div>
      <div class="demo ft-sub-title">次标题<br/>#333</div>
      <div class="demo ft-text">正文<br/>#666</div>
      <div class="demo ft-sub-text">辅助文字<br/>#999</div>
    </hs-row>
    <hs-row>
      <div class="demo-memo">用于主标题</div>
      <div class="demo-memo">用于次标题</div>
      <div class="demo-memo">用于正文/选项标题</div>
      <div class="demo-memo">用于选项框内等提示文字</div>
    </hs-row>
    <hs-row>
      <h3 style="color: red;font-weight: 400;">字号体现文字权重（由高到低）：18px加粗、18px、16px加粗、16px、14px加粗、14px、12px。</h3>
      <div class="font ft-lv1">一级权重 - <span>我是标题</span></div>
      <div class="font ft-lv2">二级权重 - <span>我是次标题</span></div>
      <div class="font ft-lv3">三级权重 - <span>我是正文着重部分</span></div>
      <div class="font ft-lv4">四级权重 - <span>我是正文</span></div>
      <div class="font ft-lv5">五级权重 - <span>我是提示文字</span></div>
    </hs-row>
  </hs-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'hs-color',
  components: {
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
  h2{
    font-weight: 300;
  }
  .tip{
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
    p{
      margin: 3px 0;
    }
  }
  .demo{
    width: 140px;
    height: 90px;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    word-break: break-all;
    color:#fff;
    display: inline-block;
    margin-right: 20px;
    font-size: 16px;
  }
  .bg-th-cl{
    background-color: $hs-theme-color;
  }
  .bg-sub-cl{
    background-color: $hs-sub-theme-color;
  }
  .bg-dark-cl{
    background-color: $hs-dark-color;
  }
  .bg-warm-cl{
    background-color: $hs-warm-color;
  }
  .bg-light-cl{
    background-color: $hs-light-color;
  }
  .bg-cn-cl{
    background-color: $hs-container-color;
  }
  .ft-title{
    background-color: $hs-black;
  }
  .ft-sub-title{
    background-color: $hs-black-1;
  }
  .ft-text{
    background-color: $hs-black-2;
  }
  .ft-sub-text{
    background-color: $hs-black-3;
  }
  .demo-memo{
    display: inline-block;
    word-break: break-all;
    margin-right: 20px;
    width: 140px;
    text-align: center;
    font-size: 12px;
    color: #333;
  }
  .demo-border{
    color: #000;
    padding: 10px;
  }
  .font{
    margin-bottom: 10px;
    margin-left: 20px;
    &.ft-lv1 { color: $hs-black; }
    &.ft-lv2 { color: $hs-black-1; }
    &.ft-lv3 { color: $hs-black-2; }
    &.ft-lv4 { color: $hs-black-2; }
    &.ft-lv5 { color: $hs-black-3; }
  }
</style>
