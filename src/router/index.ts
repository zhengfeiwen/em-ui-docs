import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'
import Components from './modules/components'
import Form from './modules/form'
import Rule from './modules/rule'
import Docs from './modules/docs'
import Charts from './modules/charts'
/* Router modules */

Vue.use(VueRouter)

/**
  基本路由，不受权限控制
*/
export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'dashboard',
          affix: true,
          id: '90000000'
        }
      }
    ]
  },
  Rule,
  Docs,
  {
    path: '/layout',
    component: Layout,
    redirect: '/documentation',
    meta: { id: '10000000' },
    children: [
      {
        path: 'layout',
        component: () => import('@/views/layout/index.vue'),
        name: 'layout',
        meta: {
          id: '10000001',
          icon: 'table',
          title: '布局',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation',
    meta: { id: '10000000' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/documentation.vue'),
        name: 'documentation',
        meta: {
          id: '10000001',
          title: '文档',
          icon: 'documentation',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/install',
    component: Layout,
    redirect: '/install',
    meta: { id: '10000000' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/install/install.vue'),
        name: 'install',
        meta: {
          id: '10000002',
          title: '安装',
          icon: 'guide',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/updatelog',
    component: Layout,
    redirect: '/updatelog',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/update.vue'),
        name: 'updatelog',
        meta: {
          title: '更新日志',
          icon: 'list',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index.vue'),
        name: 'Icons',
        meta: {
          title: '图标',
          icon: 'icon',
          noCache: true
        }
      }
    ]
  },
  Components,
  Form,
  Charts,
  {
    path: '/democode',
    component: Layout,
    redirect: '/democode',
    children: [
      {
        path: 'index',
        component: () => import('@/views/ready/democode/index.vue'),
        name: 'democode',
        meta: {
          title: '综合用例',
          icon: 'guide',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: '个人信息',
          icon: 'user',
          noCache: true
        }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash', // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
