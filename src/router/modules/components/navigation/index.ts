import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/navigation/tabs/index',
  component: () => import('@/views/components/navigation/tabs/index.vue'),
  name: 'navigation',
  meta: {
    title: '导航栏',
    icon: '',
    noCache: true
  }
}

export default Route
