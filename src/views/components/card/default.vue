<template>
  <hs-card style="width:100px;height:100px;">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">new date()</time>
          <hs-button type="text" class="button">操作按钮</hs-button>
        </div>
      </div>
  </hs-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
}
</script>

<style lang="scss">
.image{
  width: 100%;
  padding: 5px;
}
</style>
