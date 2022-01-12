<template>
  <div class="container">
    <header>
      <hs-tabs v-model="activeName">
        <hs-tab-pane label="数组" name="array"><array-md /></hs-tab-pane>
        <hs-tab-pane label="栈" name="stack"><stack-md /></hs-tab-pane>
        <hs-tab-pane label="队列" name="queue"><queue-md /></hs-tab-pane>
        <hs-tab-pane label="链表" name="link"><link-md /></hs-tab-pane>
        <hs-tab-pane label="树" name="tree"><tree-md /></hs-tab-pane>
        <hs-tab-pane label="散列表" name="hash"><hash-md /></hs-tab-pane>
        <hs-tab-pane label="堆" name="heap"><heap-md /></hs-tab-pane>
        <hs-tab-pane label="图" name="map"><map-md /></hs-tab-pane>
      </hs-tabs>
    </header>
    <section></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import arrayMd from './details/array.md'
import stackMd from './details/stack.md'
import queueMd from './details/queue.md'
import linkMd from './details/link.md'
import treeMd from './details/tree.md'
import hashMd from './details/hash.md'
import heapMd from './details/heap.md'
import mapMd from './details/map.md'

@Component({
  components: {
    arrayMd,
    stackMd,
    queueMd,
    linkMd,
    treeMd,
    hashMd,
    heapMd,
    mapMd
  }
})
export default class Structure extends Vue {
  private activeName = this.active

  get active() {
    return this.$route.params.id || 'array'
  }
}
</script>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  header{
    width: 100%;
    height: 100%;
    .hs-tabs{
      height: 100%;
      .hs-tabs__content{
        height: calc(100% - 60px);
        overflow: auto;
        &::-webkit-scrollbar {/*滚动条整体样式*/
          width: 3px;     /*高宽分别对应横竖滚动条的尺寸*/
          height: 3px;
        }
        &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          background: #535353;
        }
        &::-webkit-scrollbar-track {/*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          border-radius: 10px;
          background: #EDEDED;
        }
        .markdown h5 {
          line-height: 2;
        }
      }
    }
  }
}
</style>
