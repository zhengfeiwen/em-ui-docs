<template>
  <div>
    <div>
      <hs-radio-group v-model="radio1">
        <hs-radio-button label="上海"></hs-radio-button>
        <hs-radio-button label="北京"></hs-radio-button>
        <hs-radio-button label="广州"></hs-radio-button>
        <hs-radio-button label="深圳"></hs-radio-button>
      </hs-radio-group>
    </div>
    <div style="margin-top: 20px">
      <hs-radio-group v-model="radio2" size="medium">
        <hs-radio-button label="上海" ></hs-radio-button>
        <hs-radio-button label="北京"></hs-radio-button>
        <hs-radio-button label="广州"></hs-radio-button>
        <hs-radio-button label="深圳"></hs-radio-button>
      </hs-radio-group>
    </div>
    <div style="margin-top: 20px">
      <hs-radio-group v-model="radio3" size="small">
        <hs-radio-button label="上海"></hs-radio-button>
        <hs-radio-button label="北京" disabled ></hs-radio-button>
        <hs-radio-button label="广州"></hs-radio-button>
        <hs-radio-button label="深圳"></hs-radio-button>
      </hs-radio-group>
    </div>
    <div style="margin-top: 20px">
      <hs-radio-group v-model="radio4" disabled size="mini">
        <hs-radio-button label="上海"></hs-radio-button>
        <hs-radio-button label="北京"></hs-radio-button>
        <hs-radio-button label="广州"></hs-radio-button>
        <hs-radio-button label="深圳"></hs-radio-button>
      </hs-radio-group>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private radio1 = '上海'
  private radio2 = '上海'
  private radio3 = '上海'
  private radio4 = '上海'
}
</script>
