<template>
   <div>
     <p>分栏间隔</p>
    <hs-row :gutter="20">
      <hs-col :span="6"><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
      <hs-col :span="6" ><div class="demo-light"></div></hs-col>
      <hs-col :span="6"><div class="demo"></div></hs-col>
    </hs-row>
     <p>分栏偏移，移动是相对于前一个块而言的</p>
    <hs-row :gutter="20">
      <hs-col :span="2" :push="1"><div class="demo-light">栅格向右移动格数push="1"</div></hs-col>
      <hs-col :span="2" :offset="6"><div class="demo-light">栅格左侧的间隔格数offset="6"</div></hs-col>
      <hs-col :span="2" :pull="6"><div class="demo">栅格向左移动格数pull="6"</div></hs-col>
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
