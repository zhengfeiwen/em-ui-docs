import { RouteConfig } from 'vue-router'

const Route: RouteConfig = {
  path: '/tinymce/index',
  component: () => import('@/views/components/tinymce/index.vue'),
  name: 'tinymce',
  meta: {
    title: '富文本框',
    icon: '',
    noCache: true
  }
}

export default Route
