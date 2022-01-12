import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Route } from 'vue-router'
import { PermissionModule } from './store/modules/permission'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start()
  if (to.path === '/login') {
    next({ path: '/' })
    NProgress.done()
  } else {
    PermissionModule.GenerateRoutes()
    router.addRoutes(PermissionModule.dynamicRoutes)
    next({ ...to, replace: true })
  }
})

router.afterEach((to: Route|any) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()

  // set page title
  document.title = to.meta.title
})
