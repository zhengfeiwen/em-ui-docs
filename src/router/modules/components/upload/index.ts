import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/upload/index',
  component: () => import('@/views/components/upload/index.vue'),
  name: 'upload',
  meta: {
    title: '文件上传（停止更新）',
    icon: '',
    noCache: true
  }
}

export default Route
