```
<template>
  <div>
    <hs-progress :percentage="50"></hs-progress>
    <hs-progress :percentage="100" :format="format"></hs-progress>
    <hs-progress :percentage="100" status="success"></hs-progress>
    <hs-progress :percentage="100" status="warning"></hs-progress>
    <hs-progress :percentage="50" status="exception"></hs-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'defalut'
})
export default class extends Vue {
  private format (percentage: number) {
    return percentage === 100 ? '满' : `${percentage}%`
  }
}
</script>
```