<template>
  <hs-checkbox v-model="checked" disabled>备选项</hs-checkbox>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'default'
})
export default class extends Vue {
  private checked = !0
}
</script>
