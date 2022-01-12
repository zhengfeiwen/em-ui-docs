import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/datepicker/index',
  component: () => import('@/views/components/datepicker/index.vue'),
  name: 'datepicker',
  meta: {
    title: '日期选择器',
    icon: '',
    noCache: true
  }
}

export default Route
