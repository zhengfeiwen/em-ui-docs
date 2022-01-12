import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/image/index',
  component: () => import('@/views/components/image/index.vue'),
  name: 'image',
  meta: {
    title: '图片',
    icon: '',
    noCache: true
  }
}

export default Route
