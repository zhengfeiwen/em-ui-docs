<template>
  <div>
    <hs-radio v-model="radio" label="1">备选项</hs-radio>
    <hs-radio v-model="radio" label="2">备选项</hs-radio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private radio = '1'
}
</script>
