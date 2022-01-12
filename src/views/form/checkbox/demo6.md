```
<template>
  <div>
    <div>
      <hs-checkbox v-model="checked1" label="备选项1" border></hs-checkbox>
      <hs-checkbox v-model="checked2" label="备选项2" border></hs-checkbox>
    </div>
    <div style="margin-top: 20px">
      <hs-checkbox v-model="checked3" label="备选项1" border size="medium"></hs-checkbox>
      <hs-checkbox v-model="checked4" label="备选项2" border size="medium"></hs-checkbox>
    </div>
    <div style="margin-top: 20px">
      <hs-checkbox-group v-model="checkboxGroup1" size="small">
        <hs-checkbox label="备选项1" border></hs-checkbox>
        <hs-checkbox label="备选项2" border disabled></hs-checkbox>
      </hs-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <hs-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <hs-checkbox label="备选项1" border></hs-checkbox>
        <hs-checkbox label="备选项2" border></hs-checkbox>
      </hs-checkbox-group>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private checked1 = !0
  private checked2 = !1
  private checked3 = !0
  private checked4 = !1
  private checkboxGroup1 = []
  private checkboxGroup2 = []
}
</script>
```