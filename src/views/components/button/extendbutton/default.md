```
<template>
  <div class="main">
    <div :class="active">这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，</div>
    <hs-extendbutton
      :titles= "titles"
      @change="change"
    >
    </hs-extendbutton>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue{
  private active = { active: !1 }
  
  private titles = ['展开', '收起']

  private change (state: boolean) {
    this.active.active = state
  }
}
</script>

<style lang="scss">
  .main{
    width:50%;
    height:auto;
    div{
      width:50%;
      height: 30px;
      overflow: hidden;
    }
    .active{
      height:100px;
    }
  }
</style>
```