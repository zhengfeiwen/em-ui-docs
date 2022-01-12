interface IRightRoute {
  menuId: string
  menuName: string
  parentMenuId: string
}

export type RightRoute = IRightRoute

export interface IUserInfo {
  token: string
  id: number
  name: string
  avatar: string
  introduction: string
  email: string
}

export type UserInfo = IUserInfo

export interface IOpType {
  opType: string
  opCode: string
}

export type OpType = IOpType
