```
<template>
  <div>
    <div>
      <hs-checkbox-group v-model="checkboxGroup1">
        <hs-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</hs-checkbox-button>
      </hs-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <hs-checkbox-group v-model="checkboxGroup2" size="medium">
        <hs-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</hs-checkbox-button>
      </hs-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <hs-checkbox-group v-model="checkboxGroup3" size="small">
        <hs-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</hs-checkbox-button>
      </hs-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <hs-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <hs-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</hs-checkbox-button>
      </hs-checkbox-group>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
const cityOptions = ['上海', '北京', '广州', '深圳']

@Component({
  name: 'default'
})
export default class extends Vue {
  private checkboxGroup1 = ['上海']
  private checkboxGroup2 = ['上海']
  private checkboxGroup3 = ['上海']
  private checkboxGroup4 = ['上海']
  private cities = cityOptions
}
</script>
```