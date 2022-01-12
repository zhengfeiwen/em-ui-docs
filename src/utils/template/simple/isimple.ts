import { Vue, Component } from 'vue-property-decorator'

export default interface ISimplePage {
  onQuery: Function
  onReset: Function
  onAdd: Function
  onDel: Function
  name: String
  subName: String
}
