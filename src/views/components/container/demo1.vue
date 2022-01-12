<template>
  <div>
    <hs-container>
      <hs-header>Header</hs-header>
      <hs-main>Main</hs-main>
    </hs-container>

    <hs-container>
      <hs-header>Header</hs-header>
      <hs-main>Main</hs-main>
      <hs-footer>Footer</hs-footer>
    </hs-container>

    <hs-container>
      <hs-aside width="200px">Aside</hs-aside>
      <hs-main>Main</hs-main>
    </hs-container>

    <hs-container>
      <hs-header>Header</hs-header>
      <hs-container>
        <hs-aside width="200px">Aside</hs-aside>
        <hs-main>Main</hs-main>
      </hs-container>
    </hs-container>

    <hs-container>
      <hs-header>Header</hs-header>
      <hs-container>
        <hs-aside width="200px">Aside</hs-aside>
        <hs-container>
          <hs-main>Main</hs-main>
          <hs-footer>Footer</hs-footer>
        </hs-container>
      </hs-container>
    </hs-container>

    <hs-container>
      <hs-aside width="200px">Aside</hs-aside>
      <hs-container>
        <hs-header>Header</hs-header>
        <hs-main>Main</hs-main>
      </hs-container>
    </hs-container>

    <hs-container>
      <hs-aside width="200px">Aside</hs-aside>
      <hs-container>
        <hs-header>Header</hs-header>
        <hs-main>Main</hs-main>
        <hs-footer>Footer</hs-footer>
      </hs-container>
    </hs-container>
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
<style lang="scss">
.hs-header, .hs-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.hs-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.hs-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .hs-container {
  margin-bottom: 40px;
}

.hs-container:nth-child(5) .hs-aside,
.hs-container:nth-child(6) .hs-aside {
  line-height: 260px;
}

.hs-container:nth-child(7) .hs-aside {
  line-height: 320px;
}
</style>
