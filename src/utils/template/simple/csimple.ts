import { Vue } from 'vue-property-decorator'

export default class CSimplePage extends Vue {
  name = '[我是模板字段=name]'

  subName = '[我是模板字段-subName]'

  onQuery = () => {
    console.log('我是模板默认函数')
    alert('我是模板默认函数')
  }

  onReset = (el: any) => {
    el = {
      status: 1,
      centerCode: '',
      centerName: '',
      business: ''
    }
    this.onQuery()
  }
}
