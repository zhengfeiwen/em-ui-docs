import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/radio/index',
  component: () => import('@/views/form/radio/index.vue'),
  name: 'radio',
  meta: {
    title: '单选框',
    icon: '',
    noCache: true
  }
}

export default Route
