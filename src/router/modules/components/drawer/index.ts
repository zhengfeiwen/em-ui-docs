import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/drawer/index',
  component: () => import('@/views/components/drawer/index.vue'),
  name: 'drawer',
  meta: {
    title: '抽屉',
    icon: '',
    noCache: true
  }
}

export default Route
