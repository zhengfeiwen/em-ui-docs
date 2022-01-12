<template>
   <div>
    <hs-row :gutter="20">
      <hs-col :span="3"><div class="demo-light"></div></hs-col>
      <hs-col :span="5"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
      <hs-col :span="10"><div class="demo"></div></hs-col>
    </hs-row>
    <hs-row :gutter="20">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="2"><div class="demo"></div></hs-col>
      <hs-col :span="7" ><div class="demo-light"></div></hs-col>
      <hs-col :span="9"><div class="demo"></div></hs-col>
    </hs-row>
    <hs-row :gutter="20">
      <hs-col :span="9"><div class="demo-light"></div></hs-col>
      <hs-col :span="4"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
      <hs-col :span="5"><div class="demo"></div></hs-col>
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
