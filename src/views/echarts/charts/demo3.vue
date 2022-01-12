<template>
  <div class="chart-body">
    <div class="chart-body-theme">
      <hs-chart :option="option" theme="light"></hs-chart>
      <hs-chart :option="option" theme="dark"></hs-chart>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'default'
})
export default class extends Vue {
  private value = false
  private option = {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}
</script>
<style lang="scss">
.chart-body{
  width: 100% !important;
  .chart-body-theme{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:space-between;
  }
}
</style>
