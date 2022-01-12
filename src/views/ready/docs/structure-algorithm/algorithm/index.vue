<template>
  <div class="container">
    <header class="header">
      <hs-link @click="drawer = true" type="primary" title="算法概述">算法概述 &nbsp;<hs-svgicon name="guide" /></hs-link>
      <hs-drawer
        title="算法概述"
        :visible.sync="drawer"
        :direction="direction">
          <div class="details">
            <h3>算法分类</h3>
            <h4>十种常见排序算法可以分为两大类：</h4>
            <p>比较类排序：通过比较来决定元素间的相对次序，由于其时间复杂度不能突破O(nlogn)，因此也称为非线性时间比较类排序。</p>
            <p>非比较类排序：不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以线性时间运行，因此也称为线性时间非比较类排序。 </p>
            <hs-image :src="img1"></hs-image>
            <h3>算法复杂度</h3>
            <hs-image :src="img2"></hs-image>
            <h3>相关概念</h3>
            <ul>
              <ol><div class="bold">稳定</div>如果a原本在b前面，而a=b，排序之后a仍然在b的前面。</ol>
              <ol><div class="bold">稳定不稳定</div>如果a原本在b的前面，而a=b，排序之后 a 可能会出现在 b 的后面。</ol>
              <ol><div class="bold">稳定时间复杂度</div>对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。</ol>
              <ol><div class="bold">空间复杂度</div>是指算法在计算机</ol>
            </ul>
            <br/>
            <span>内执行时所需存储空间的度量，它也是数据规模n的函数。</span>
          </div>
      </hs-drawer>
      <hs-tabs v-model="activeName">
        <hs-tab-pane label="冒泡排序" name="bubble"><bubble-md /></hs-tab-pane>
        <hs-tab-pane label="快速排序" name="quick"><quick-md /></hs-tab-pane>

        <hs-tab-pane label="插入排序" name="insertion"><insertion-md /></hs-tab-pane>
        <hs-tab-pane label="希尔排序" name="shell"><shell-md /></hs-tab-pane>

        <hs-tab-pane label="选择排序" name="selection"><selection-md /></hs-tab-pane>
        <hs-tab-pane label="堆排序" name="heap"><heap-md /></hs-tab-pane>

        <hs-tab-pane label="归并排序" name="merge"><merge-md /></hs-tab-pane>

        <hs-tab-pane label="计数排序" name="counting"><counting-md /></hs-tab-pane>
        <hs-tab-pane label="桶排序" name="bucket"><bucket-md /></hs-tab-pane>
        <hs-tab-pane label="基数排序" name="radix"><radix-md /></hs-tab-pane>
      </hs-tabs>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import bubbleMd from './details/bubble.md'
import quickMd from './details/quick.md'

import insertionMd from './details/insertion.md'
import shellMd from './details/shell.md'

import selectionMd from './details/selection.md'
import heapMd from './details/heap.md'

import mergeMd from './details/merge.md'
import mergesMd from './details/merges.md'

import countingMd from './details/counting.md'
import bucketMd from './details/bucket.md'
import radixMd from './details/radix.md'

@Component({
  components: {
    bubbleMd,
    quickMd,
    insertionMd,
    shellMd,
    selectionMd,
    heapMd,
    mergeMd,
    mergesMd,
    countingMd,
    bucketMd,
    radixMd
  }
})
export default class Structure extends Vue {
  private activeName = this.active

  private drawer = !1

  private direction = 'ttb'

  private img1 = require('./sort-types.png')

  private img2 = require('./sort-compare.png')

  get active() {
    return this.$route.params.id || 'bubble'
  }
}
</script>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  header.header{
    width: 100%;
    height: 100%;
    .hs-link{
      position: absolute;
      right: 20px;
      top: 10px;
    }
    .hs-drawer{
      .hs-drawer-body{
        height: 70%;
      }
      section{
        padding: 10px;
        height: calc(100% - 75px);
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
      }
    }
    .hs-collapse{
      .hs-collapse-item{
        .hs-collapse-item__wrap{
          height: 600px;
          padding: 10px;
          overflow: auto;
          margin-bottom: 20px;
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
        }
      }
    }
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
    .el-image img{
      height: 600px;
      width: auto;
      margin-bottom: 20px;
    }
  }
  .details{
    margin-left: 10px;
    h4, img, ol{
      margin-left: 20px;
      .bold{
        font-weight: bold;
        &:after{
          content: ':';
          margin: 0 10px 0 0;
        }
      }
    }
    p{
      margin-left: 30px;
    }
  }
}
</style>
