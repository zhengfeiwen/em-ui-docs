```
<template>
  <div>
    <hs-drawer :wrapperClosable="wrapperClosable" :withHeader="withHeader" :show-close="showClose" :direction="direction" title="dddd" :visible.sync="drawer" @before-close="handleClose">
      <template slot="title">
        <div>
          i am slot's title
        </div>
        do something
      </template>
    </hs-drawer>
    <hs-button @click="click">drawer-open</hs-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private drawer = !1
  private drawer1 = !0
  private showClose = true
  private withHeader = true
  private wrapperClosable = true

  private direction = 'btt'

  private click () {
    this.drawer = !0
  }

  private handleClose(done: Function) {
    // alert('我关咯')
    done();
  }
}
</script>
```