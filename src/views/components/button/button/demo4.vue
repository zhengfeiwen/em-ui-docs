<template>
  <div>
    <hs-button-group>
      <hs-button type="primary" icon="hs-icon-arrow-left">上一页</hs-button>
      <hs-button type="primary">下一页<i class="hs-icon-arrow-right hs-icon--right"></i></hs-button>
    </hs-button-group>
    <hs-button-group>
      <hs-button type="primary" icon="hs-icon-edit"></hs-button>
      <hs-button type="primary" icon="hs-icon-share"></hs-button>
      <hs-button type="primary" icon="hs-icon-delete"></hs-button>
    </hs-button-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo4'
})
export default class extends Vue {
}
</script>
<style lang="scss"></style>
