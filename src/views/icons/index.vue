<template>
  <div class="icons-container">
    <aside>
      <a
        href="https://armour.github.io/vue-typescript-admin-docs/guide/advanced/icon.html"
        target="_blank"
      >Add and use
      </a>
    </aside>
    <el-tabs type="border-card">
      <el-tab-pane label="Hs-icons">
        <div class="grid">
          <div
            class="item"
            v-for="item of svgIcons"
            :key="item"
            @click="handleClipboard(generateSvgIconCode(item),$event)"
          >
            <el-tooltip placement="top">
              <div slot="content">
                {{ generateSvgIconCode(item) }}
              </div>
              <div class="icon-item">
                <hs-svgicon
                  :name="item"
                  class="disabled"
                />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Element-UI Icons">
        <div class="grid">
          <div
            class="item"
            v-for="item of elementIcons"
            :key="item"
            @click="handleClipboard(generateElementIconCode(item),$event)"
          >
            <el-tooltip placement="top">
              <div slot="content">
                {{ generateElementIconCode(item) }}
              </div>
              <div class="icon-item">
                <i :class="'hs-icon-' + item" />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { handleClipboard } from '@/utils/clipboard'
import elementIcons from './element-icons'
import svgIcons from './svg-icons'

@Component({
  name: 'Icons'
})
export default class extends Vue {
  private svgIcons = svgIcons
  private elementIcons = elementIcons
  private handleClipboard = handleClipboard

  private generateElementIconCode(symbol: string) {
    return `<i class="hs-icon-${symbol}" />`
  }

  private generateSvgIconCode(symbol: string) {
    return `<hs-svgicon name="${symbol}" />`
  }
}
</script>

<style lang="scss">
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;
  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  .item{
    border: 1px solid #d9d9d9;
    padding: 10px 0;
    .icon-item {
      text-align: center;
      width: 100%;
      float: left;
      font-size: 30px;
      cursor: pointer;
      svg, i{
        color: #212121;
        font-size: inherit;
      }
    }
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
    color: red;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
