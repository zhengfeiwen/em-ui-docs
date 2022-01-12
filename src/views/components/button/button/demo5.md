```
<template>
  <div>
    <hs-row>
      <hs-button>默认按钮</hs-button>
      <hs-button size="medium">中等按钮</hs-button>
      <hs-button size="small">小型按钮</hs-button>
      <hs-button size="mini">超小按钮</hs-button>
    </hs-row>
    <hs-row>
      <hs-button round>默认按钮</hs-button>
      <hs-button size="medium" round>中等按钮</hs-button>
      <hs-button size="small" round>小型按钮</hs-button>
      <hs-button size="mini" round>超小按钮</hs-button>
    </hs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo5'
})
export default class extends Vue {
}
</script>
<style lang="scss">
</style>
```