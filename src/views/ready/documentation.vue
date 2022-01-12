<template>
  <div class="container">
    <section>
      <div v-for="(item, i) in btns" :key="i" class="link_area">
        <a target="_blank" :href="item.href">{{ item.title }}</a>
      </div>
    </section>
    <footer @click="footClick" :class="footC" @mouseleave="footLeave">
      <!-- 数据结构与算法 -->
      <hs-card class="item structure-algorithm" header="数据结构与算法">
        <hs-row v-for="(sa, i) in saNavs" :key="i">
          <hs-col :span="24">
            <hs-tag :title="sa.title" :type="sa.type === 'structure' ? '' : 'success' " @click="fClick(sa,'structure-algorithm')">{{ sa.title }}</hs-tag>
            <div class="desc">{{ sa.desc }}</div>
          </hs-col>
        </hs-row>
      </hs-card>
      <!-- 性能优化 -->
      <hs-card class="item performance-optimization" header="性能优化">
        <hs-row v-for="(po, i) in poNavs" :key="i">
          <hs-col :span="24">
            <hs-tag @click="fClick(po, 'performance-optimization')">{{ po.title }}</hs-tag>
            <div class="desc">{{ po.desc }}</div>
          </hs-col>
        </hs-row>
      </hs-card>
      <!-- 代码规范 -->
      <hs-card class="item code-rule" header="代码规范">
        <hs-row v-for="(cr, i) in crNavs" :key="i">
          <hs-col :span="24">
            <hs-tag @click="fClick(cr, 'code-rule')">{{ cr.title }}</hs-tag>
            <div class="desc">{{ cr.desc }}</div>
          </hs-col>
        </hs-row>
      </hs-card>
    </footer>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { saNavs, poNavs, crNavs } from './docs/list'
@Component({
  name: 'documentation'
})
export default class extends Vue {
  private btns = [
    {
      title: 'hs-elementui',
      href: 'https://github.com/zhengfeiwen/hs-elementui-docs'
    },
    {
      title: 'iview-admin',
      href: 'https://panjiachen.gitee.io/vue-element-admin/#/dashboard'
    },
    {
      title: 'vue',
      href: 'https://cn.vuejs.org/v2/guide/index.html'
    },
    {
      title: 'Mock',
      href: 'http://mockjs.com/'
    },
    {
      title: 'TypeScript',
      href: 'https://www.tslang.cn/docs/home.html'
    },
    {
      title: 'Element-ui',
      href: 'https://element.eleme.cn/#/zh-CN/component/card'
    },
    {
      title: 'vue-element-admin',
      href: 'https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/'
    },
    {
      title: 'ECharts',
      href: 'https://echarts.apache.org/examples/zh/index.html#chart-type-line'
    }
  ]

  private saNavs: any[] = saNavs

  private poNavs: any[] = poNavs

  private crNavs: any[] = crNavs

  private footC = {
    active: !1
  }

  private fClick(sa: any) {
    const { type, title, id } = sa
    this.$router.push({
      name: type,
      params: {
        title: title,
        id: id
      }
    })
  }

  private footClick() {
    this.footC.active = !this.footC.active
    // this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
    //   dangerouslyUseHTMLString: true
    // })
  }

  private footLeave() {
    this.footC.active = !1
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px 0;
  section{
    width: 100%;
    max-height: calc(100% - 500px);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .link_area {
      width: 200px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-content: flex-start;
      margin: 10px;
      align-items: center;
      background-color: #000;
      color: #fff;
      border-radius: 5px;
      -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
      box-shadow: 10px 10px 5px #888888;
      &:hover {
        color: rgb(24, 144, 255);
        background-color: #012a50;
      }
      a {
        font-size: 22px;
        font-family: "Microsoft YaHei";
        text-align: center;
      }
    }
  }
  footer{
    position: absolute;
    bottom: 10px;
    height: 500px;
    width: calc(100% - 120px);
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    &.active{
      height: calc(100% - 12px);
      background-color: #fff;
    }
    .item{
      min-width: 60px;
      height: 100%;
      margin: 0 10px;
      overflow: hidden;
      white-space: nowrap;
      &:hover{
        width: 600%;
      }
      header{
        height: 56px;
      }
      section{
        width: calc(100% + 10px);
        margin: 0 -5px;
        max-height: 100%;
        padding: 0 !important;
        overflow: auto;
        &::-webkit-scrollbar {/*滚动条整体样式*/
          width: 0px;     /*高宽分别对应横竖滚动条的尺寸*/
          height: 0px;
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
        .hs-row{
          width: 100%;
          .hs-tag{
            cursor: pointer;
            margin: 5px 10px;
            width: 75px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            text-align: center;
          }
          .desc{
            display: inline-block;
            line-height: 3;
            font-size: 14px;
            width: calc(100% - 100px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
        }
      }
    }
  }
}
</style>
