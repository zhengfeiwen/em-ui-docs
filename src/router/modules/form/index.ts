
import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import Radio from './radio'
import Checkbox from './checkbox'

const Form: RouteConfig = {
  path: '/form',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: '表单',
    icon: 'list'
  },
  children: [
    Radio,
    Checkbox
  ]
}

export default Form
