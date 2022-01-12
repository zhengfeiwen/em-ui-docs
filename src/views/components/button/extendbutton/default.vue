<template>
  <div class="main">
    <hs-extendbutton
      :titles= "titles"
      @change="change"
    >
        <template slot="short">这里有好多文字，这里有好多文字...</template>
        <template slot="whole">这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，这里有好多文字，</template>
    </hs-extendbutton>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private active = { active: !1 }

  private titles = ['展开', '收起']
}
</script>

<style lang="scss">
</style>
