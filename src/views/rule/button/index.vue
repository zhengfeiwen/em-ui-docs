<template>
  <hs-row>
    <img :src="src" alt="" srcset="">
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
  private src = require('../../../assets/statics/rule/button.png')
}
</script>

<style lang="scss" scoped>
  .hs-row{
    height: 100%;
    width: 100%;
  }
</style>
