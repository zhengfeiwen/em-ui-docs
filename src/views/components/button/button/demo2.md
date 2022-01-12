```
<template>
  <div>
    <hs-row>
      <hs-button disabled>默认按钮</hs-button>
      <hs-button type="primary" disabled>主要按钮</hs-button>
      <hs-button type="success" disabled>成功按钮</hs-button>
      <hs-button type="info" disabled>信息按钮</hs-button>
      <hs-button type="warning" disabled>警告按钮</hs-button>
      <hs-button type="danger" disabled>危险按钮</hs-button>
    </hs-row>

    <hs-row>
      <hs-button plain disabled>朴素按钮</hs-button>
      <hs-button type="primary" plain disabled>主要按钮</hs-button>
      <hs-button type="success" plain disabled>成功按钮</hs-button>
      <hs-button type="info" plain disabled>信息按钮</hs-button>
      <hs-button type="warning" plain disabled>警告按钮</hs-button>
      <hs-button type="danger" plain disabled>危险按钮</hs-button>
    </hs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo2'
})
export default class extends Vue {
}
</script>
```