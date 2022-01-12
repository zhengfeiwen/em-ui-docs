<template>
  <div>
    <div>
      <hs-radio v-model="radio1" label="1" border>备选项1</hs-radio>
      <hs-radio v-model="radio1" label="2" border>备选项2</hs-radio>
    </div>
    <div style="margin-top: 20px">
      <hs-radio v-model="radio2" label="1" border size="medium">备选项1</hs-radio>
      <hs-radio v-model="radio2" label="2" border size="medium">备选项2</hs-radio>
    </div>
    <div style="margin-top: 20px">
      <hs-radio-group v-model="radio3" size="small">
        <hs-radio label="1" border>备选项1</hs-radio>
        <hs-radio label="2" border disabled>备选项2</hs-radio>
      </hs-radio-group>
    </div>
    <div style="margin-top: 20px">
      <hs-radio-group v-model="radio4" size="mini" disabled>
        <hs-radio label="1" border>备选项1</hs-radio>
        <hs-radio label="2" border>备选项2</hs-radio>
      </hs-radio-group>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private radio1 = '1'
  private radio2 = '1'
  private radio3 = '1'
  private radio4 = '1'
}
</script>
