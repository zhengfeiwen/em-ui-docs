```
<template>
   <hs-checkbox-group
    v-model="checkedCities"
    :min="1"
    :max="2">
    <hs-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</hs-checkbox>
  </hs-checkbox-group>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const cityOptions = ['上海', '北京', '广州', '深圳']

@Component({
  name: 'default'
})
export default class extends Vue {
  private checkedCities = ['上海', '北京']
  private cities = cityOptions
}
</script>
```