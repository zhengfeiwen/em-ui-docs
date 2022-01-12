```
<template>
  <div>
    <hs-progress :stroke-width="26" :interval="10000" :taskChains="taskChains" :percentage="percentage" @finished="finished"></hs-progress>
    <br/>
    <br/>
    <hs-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="btnFinished"
      v-if="cur < 3"
      >完成{{tasks[cur]}}</hs-button
    >
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'demo5',
  components: {
  }
})

export default class ProgressDemo extends Vue {
  public percentage = 0
  public tasks: string[] = ['task0', 'task1', 'task2']
  public cur = 0;
  public taskChains:any = {
    task0: {
      status: 'doing'
    },
    task1: {
      status: 'init',
      task: () => {
        setTimeout(() => {
          this.taskChains.task1.status = 'finished'
        }, 5 * 1000)
      }
    },
    task2: {
      status: 'init'
    }
  }

  public btnFinished () {
    if (this.cur > 2) {
      return
    }
    const key = this.tasks[this.cur++]
    this.taskChains[key].status = 'finished'
  }

  public finished () {
    alert('任务完成')
  }
}
</script>
```