<template>
  <hs-radio-group v-model="radio">
    <hs-radio :label="3">备选项</hs-radio>
    <hs-radio :label="6">备选项</hs-radio>
    <hs-radio :label="9">备选项</hs-radio>
  </hs-radio-group>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private radio = '3'
}
</script>
