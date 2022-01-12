```
<template>
   <hs-checkbox-group v-model="checkList">
    <hs-checkbox label="复选框 A"></hs-checkbox>
    <hs-checkbox label="复选框 B"></hs-checkbox>
    <hs-checkbox label="复选框 C"></hs-checkbox>
    <hs-checkbox label="禁用" disabled></hs-checkbox>
    <hs-checkbox label="选中且禁用" disabled></hs-checkbox>
  </hs-checkbox-group>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private checkList = ['选中且禁用', '复选框 A']
}
</script>
```