
import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import Datepicker from './datepicker'
import Navigation from './navigation'
import Progress from './progress'
import Upload from './upload'
import Button from './button'
import Tinymce from './tinymce'
import Card from './card'
import Drawer from './drawer'
import Image from './image'
import Divider from './divider'
import Table from './table'
import Plupload from './plupload'
import Container from './container'

const Components: RouteConfig = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    Datepicker,
    Navigation,
    Progress,
    Upload,
    Plupload,
    Button,
    Tinymce,
    Card,
    Drawer,
    Image,
    Divider,
    Table,
    Container
  ]
}

export default Components
