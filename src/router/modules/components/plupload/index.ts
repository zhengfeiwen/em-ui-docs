import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/plupload/index',
  component: () => import('@/views/components/plupload/index.vue'),
  name: 'plupload',
  meta: {
    title: '文件上传',
    icon: '',
    noCache: true
  }
}

export default Route
