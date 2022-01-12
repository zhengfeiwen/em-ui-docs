```
<template>
  <div>
    <hs-row>
      <hs-button>默认按钮</hs-button>
      <hs-button type="primary">主要按钮</hs-button>
      <hs-button type="success">成功按钮</hs-button>
      <hs-button type="info">信息按钮</hs-button>
      <hs-button type="warning">警告按钮</hs-button>
      <hs-button type="danger">危险按钮</hs-button>
    </hs-row>

    <hs-row>
      <hs-button plain>朴素按钮</hs-button>
      <hs-button type="primary" plain>主要按钮</hs-button>
      <hs-button type="success" plain>成功按钮</hs-button>
      <hs-button type="info" plain>信息按钮</hs-button>
      <hs-button type="warning" plain>警告按钮</hs-button>
      <hs-button type="danger" plain>危险按钮</hs-button>
    </hs-row>

    <hs-row>
      <hs-button round>圆角按钮</hs-button>
      <hs-button type="primary" round>主要按钮</hs-button>
      <hs-button type="success" round>成功按钮</hs-button>
      <hs-button type="info" round>信息按钮</hs-button>
      <hs-button type="warning" round>警告按钮</hs-button>
      <hs-button type="danger" round>危险按钮</hs-button>
    </hs-row>

    <hs-row>
      <hs-button icon="hs-icon-search" circle></hs-button>
      <hs-button type="primary" icon="hs-icon-edit" circle></hs-button>
      <hs-button type="success" icon="hs-icon-check" circle></hs-button>
      <hs-button type="info" icon="hs-icon-message" circle></hs-button>
      <hs-button type="warning" icon="hs-icon-star-off" circle></hs-button>
      <hs-button type="danger" icon="hs-icon-delete" circle></hs-button>
    </hs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
}
</script>
```