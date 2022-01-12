```
<template>
  <div>
    <hs-iconbutton
      icon="wechat"
      desc="聊天"
      @click="click"
    >
    </hs-iconbutton>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue{
  private click () {
      alert('开始聊天')
    }
}
</script>
```