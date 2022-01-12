```
<template>
  <hs-image
    style="width:100px;height:100px;"
    :src="url"
  >
  </hs-image>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jwpeg'
}
</script>
```