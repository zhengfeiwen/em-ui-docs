import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const Rule: RouteConfig = {
  path: '/docs',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    hidden: true,
    title: '文档'
  },
  children: [
    {
      path: 'structure-algorithm/structure/index',
      component: () => import('@/views/ready/docs/structure-algorithm/structure/index.vue'),
      name: 'structure',
      meta: {
        title: '数据结构',
        noCache: true
      }
    },
    {
      path: 'structure-algorithm/algorithm/index',
      component: () => import('@/views/ready/docs/structure-algorithm/algorithm/index.vue'),
      name: 'algorithm',
      meta: {
        title: '算法',
        noCache: true
      }
    },
    {
      path: 'performance-optimization/index',
      component: () => import('@/views/ready/docs/performance-optimization/index.vue'),
      name: 'performance-optimization',
      meta: {
        title: '性能优化',
        noCache: true
      }
    },
    {
      path: 'code-rule/code/index',
      component: () => import('@/views/ready/docs/code-rule/code/index.vue'),
      name: 'code',
      meta: {
        title: '代码规范',
        noCache: true
      }
    },
    {
      path: 'code-rule/logic/index',
      component: () => import('@/views/ready/docs/code-rule/logic/index.vue'),
      name: 'logic',
      meta: {
        title: '逻辑规范',
        noCache: true
      }
    },
    {
      path: 'otherrule/index',
      component: () => import('@/views/ready/docs/otherrule/index.vue'),
      name: 'otherrule',
      meta: {
        title: '其他规范',
        noCache: true
      }
    }
  ]
}

export default Rule
