import { RouteConfig } from 'vue-router'

const Button: RouteConfig = {
  path: '/button/',
  component: () => import('@/views/components/button/index.vue'),
  redirect: 'button',
  meta: {
    title: '按钮'
  },
  children: [
    {
      path: 'button/index',
      component: () => import('@/views/components/button/button/index.vue'),
      name: 'button',
      meta: {
        title: '按钮',
        noCache: true
      }
    },
    {
      path: 'extendbutton/index',
      component: () => import('@/views/components/button/extendbutton/index.vue'),
      name: 'extendbutton',
      meta: {
        title: '扩展按钮',
        noCache: true
      }
    },
    {
      path: 'iconbutton/index',
      component: () => import('@/views/components/button/iconbutton/index.vue'),
      name: 'iconbutton',
      meta: {
        title: '图标按钮',
        noCache: true
      }
    },
    {
      path: 'logobutton/index',
      component: () => import('@/views/components/button/logobutton/index.vue'),
      name: 'logobutton',
      meta: {
        title: 'logo按钮',
        noCache: true
      }
    }
  ]
}

export default Button
