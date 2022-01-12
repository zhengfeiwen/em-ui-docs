```
<template>
  <div>
    <hs-radio disabled v-model="radio" label="禁用">备选项</hs-radio>
    <hs-radio disabled v-model="radio" label="选中且禁用">备选项</hs-radio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private radio = '选中且禁用'
}
</script>
```