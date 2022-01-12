import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { constantRoutes } from '@/router'
import { RightRoute } from '@/utils/types'
import store from '@/store'

const hasPermission = (rights: RightRoute[], route: RouteConfig) => {
  if (route.meta && route.meta.id) {
    return rights.some(right => route.meta?.id === right.menuId)
  } else {
    return !0
  }
}

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[]
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes
    this.dynamicRoutes = routes
    console.log(this.routes, this.dynamicRoutes)
  }

  @Action
  public GenerateRoutes() {
    this.SET_ROUTES(constantRoutes)
  }
}

export const PermissionModule = getModule(Permission)
