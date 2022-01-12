```
<template>
  <div>
    <hs-logobutton
      flexStyle="horizontal"
      :buttons="buttons"
      @handleClick="handleClick"
    >
      <template slot="ext0">
        <i class="el-icon-date" />
      </template>
      <template slot="ext1">
        <i class="el-icon-mobile-phone" />
      </template>
      <template slot="ext2">
        随意
      </template>
    </hs-logobutton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue{
  private buttons:object[] = [
    {
      id: 'live',
      title: 'Live',
      color: 'yellow',
      icon: 'cir-book'
    },
    {
      id: 'store',
      title: '书店',
      icon: 'edit',
      color: 'green'
    },
    {
      title: '圆桌',
      icon: 'org',
      color: 'lightbule'
    }
  ]
  private handleClick (key: string) {
    alert(key)
  }
}
</script>
```