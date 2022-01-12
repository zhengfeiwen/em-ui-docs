import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const Rule: RouteConfig = {
  path: '/echarts',
  component: Layout,
  redirect: 'noredirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'charts',
      component: () => import('@/views/echarts/charts/index.vue'),
      name: 'chartsDemo',
      meta: {
        title: 'echart图表',
        icon: 'chart',
        noCache: true
      }
    }
  ]
}

export default Rule
