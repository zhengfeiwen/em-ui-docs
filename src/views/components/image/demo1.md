```
<template>
  <hs-image
      style="width:100px;height:100px;"
      :src="url"
    >
      <div slot="error" class="slot-error">
        <i class="el-icon-picture-outline"></i>
      </div>
    </hs-image>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo1'
})
export default class extends Vue {
  private url = 'https://error.jwpeg'
}
</script>
```