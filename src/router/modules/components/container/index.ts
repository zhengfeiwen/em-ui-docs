import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/container/index',
  component: () => import('@/views/components/container/index.vue'),
  name: 'container',
  meta: {
    title: '容器',
    icon: '',
    noCache: true
  }
}

export default Route
