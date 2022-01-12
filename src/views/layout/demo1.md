```
<template>
   <div>
     <p>分栏间隔</p>
     <hs-row :gutter="20">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
    </hs-row>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo1'
})
export default class extends Vue {
}
</script>
```