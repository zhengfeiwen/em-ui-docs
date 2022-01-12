import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const Rule: RouteConfig = {
  path: '/rule',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: '规范',
    icon: 'excel'
  },
  children: [{
    path: 'contain/index',
    component: () => import('@/views/rule/contain/index.vue'),
    name: 'contain',
    meta: {
      title: '布局',
      noCache: true
    }
  },
  {
    path: 'color/index',
    component: () => import('@/views/rule/color/index.vue'),
    name: 'color',
    meta: {
      title: '颜色',
      noCache: true
    }
  },
  {
    path: 'border/index',
    component: () => import('@/views/rule/border/index.vue'),
    name: 'border',
    meta: {
      title: '边框',
      noCache: true
    }
  },
  {
    path: 'font/index',
    component: () => import('@/views/rule/font/index.vue'),
    name: 'font',
    meta: {
      title: '字体',
      noCache: true
    }
  },
  {
    path: 'button/index',
    component: () => import('@/views/rule/button/index.vue'),
    name: 'button',
    meta: {
      title: '按钮',
      noCache: true
    }
  }
  ]
}

export default Rule
