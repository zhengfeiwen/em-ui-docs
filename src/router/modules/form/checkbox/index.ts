import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/checkbox/index',
  component: () => import('@/views/form/checkbox/index.vue'),
  name: 'checkbox',
  meta: {
    title: '复选框',
    icon: '',
    noCache: true
  }
}

export default Route
