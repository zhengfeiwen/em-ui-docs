import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/divider/index',
  component: () => import('@/views/components/divider/index.vue'),
  name: 'divider',
  meta: {
    title: '分割线',
    icon: '',
    noCache: true
  }
}

export default Route
