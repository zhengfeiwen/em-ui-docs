```
<template>
   <div>
     <p>默认</p>
    <hs-row type="flex">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
    </hs-row>
     <p>justify="center"</p>
    <hs-row type="flex" justify="center">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
    </hs-row>
     <p>justify="start"</p>
    <hs-row type="flex" justify="start">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
    </hs-row>
     <p>justify="end"</p>
    <hs-row type="flex" justify="end">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
    </hs-row>
     <p>justify="space-between"</p>
    <hs-row type="flex" justify="space-between">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
    </hs-row>
     <p>justify="space=around"</p>
    <hs-row type="flex" justify="space-around">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
    </hs-row>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'demo3'
})
export default class extends Vue {
}
</script>

```