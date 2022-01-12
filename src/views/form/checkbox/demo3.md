```
<template>
   <div>
      <hs-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</hs-checkbox>
      <div style="margin: 15px 0;"></div>
      <hs-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <hs-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</hs-checkbox>
      </hs-checkbox-group>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const cityOptions = ['上海', '北京', '广州', '深圳']

@Component({
  name: 'default'
})
export default class extends Vue {
  private checkAll = false
  private checkedCities = ['上海', '北京']
  private cities = cityOptions
  private isIndeterminate = true

  private handleCheckAllChange (val: any) {
    this.checkedCities = val ? cityOptions : []
    this.isIndeterminate = false
  }

  private handleCheckedCitiesChange (value: any) {
    const checkedCount = value.length
    this.checkAll = checkedCount === this.cities.length
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
  }      
}
</script>
```