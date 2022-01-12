import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/progress/index',
  component: () => import('@/views/components/progress/index.vue'),
  name: 'progress',
  meta: {
    title: '进度条',
    icon: '',
    noCache: true
  }
}

export default Route
