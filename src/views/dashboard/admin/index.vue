<template>
  <div class="home_container">
    <div class="home_recommend">
      <hs-carousel :interval="4000" type="card" height="200px">
        <hs-carousel-item v-for="(item, i) in reconmmends" :key="i">
          <hs-card><hs-image :src="item.href" ></hs-image></hs-card>
        </hs-carousel-item>
      </hs-carousel>
    </div>
    <div class="home_desc">
      <h3>项目快速成型工具</h3>
      <section>使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。</section>
    </div>
    <hs-divider></hs-divider>
    <transition name="fade-transform" mode="out-in">
      <div class="home_body">
        <hs-card>
          <hs-divider content-position="left">最新</hs-divider>
          <el-tree
            :data="latestData.data"
            :props="latestData.props"
            accordion
            @node-click="handleNodeClick">
          </el-tree>
        </hs-card>
        <hs-card>
          <hs-divider content-position="left">常用</hs-divider>
          <el-tree
            :data="hotData.data"
            :props="hotData.props"
            accordion
            @node-click="handleNodeClick">
          </el-tree>
        </hs-card>
        <hs-card class="api">
          <hs-divider content-position="left"><a href="">API</a></hs-divider>
          <!-- <el-input v-model="apiSearch" placeholder="请输入搜索内容" size="mini" suffix-icon="el-icon-search"></el-input> -->
          <el-tree
            :data="apiData.data"
            :props="apiData.props"
            accordion
            @node-click="handleNodeClick">
          </el-tree>
        </hs-card>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const { api, latest, hot } = require('./datas.js')

@Component({
  name: 'dashboard'
})
export default class extends Vue {
  private apiData = api
  private latestData = latest
  private hotData = hot
  private apiSearch = ''
  private reconmmends = [
    {
      name: '操作按钮组',
      href: require('@/assets/statics/home/actionline.png')
    },
    {
      name: '日期组件',
      href: require('@/assets/statics/home/datepicker.png')
    },
    {
      name: '进度条',
      href: require('@/assets/statics/home/progress.png')
    },
    {
      name: '查询条件',
      href: require('@/assets/statics/home/querycondition.png')
    },
    {
      name: '下载',
      href: require('@/assets/statics/home/upload.png')
    }
  ]

  private handleNodeClick() {
    // do something
  }
}
</script>

<style lang="scss" scoped>
.home_container{
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 10px 6px;
  display: flex;
  flex-direction: column;
  .home_recommend{
    height: 35%;
    width: 100%;
    .el-carousel__item{
      height: 100%;
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      padding: 7px;
      .el-card{
        height: 100%;
        width: 80%;
        box-sizing: border-box;
        margin: 5px;
        img{
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          padding: 2px;
        }
      }
    }
  }
  .home_desc{
    height: 10%;
    width: 100%;
  }
  .home_body{
    height: 55%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    .el-card{
      width: calc(33% - 1px);
      .api{
        width: 100%;
        .el-input{
          width: 100% !important;
          .el-input__suffix{
            user-select: none;
          }
        }
      }
    }
  }
}
</style>
