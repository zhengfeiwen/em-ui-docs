```
<template>
  <div>
    <hs-tabs
      tabType="divi"
      :tabs="tabs"
      :defaultTab="0"
      @change="tabChange"
    ></hs-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        curTab: 'documentary',
        tabs: [
          {
            id: 'documentary',
            name: '跟单数据'
          },
          {
            id: 'booking',
            name: '订单数据'
          }
        ]
      }
    },
    methods: {
      tabChange: function (id) {
        // this.curTab = id
      }
    }
  }
</script>
```