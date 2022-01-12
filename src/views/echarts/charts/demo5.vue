<template>
  <div class="chart-body">
    <div class="chart-body-theme">
      <hs-chart :option="optionLine" group="test"></hs-chart>
      <hs-chart :option="optionBar" group="test"></hs-chart>
      <hs-chart :option="optionPie" group="test"></hs-chart>
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
  private optionLine = {
    color: '#d48265',
    title: {
      text: 'HsCharts 示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }

  private optionBar = {
    color: '#d48265',
    title: {
      text: 'HsCharts 示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }

  private optionPie = {
    title: {
      text: 'HsCharts 示例',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [{
      name: '销量',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 484, name: '其他广告' },
        { value: 300, name: '视频广告' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
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
