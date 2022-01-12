<template>
  <div class="update-log-container">
    <h1>更新日志</h1>
    <update-md />
  </div>
</template>
<script>
import updateMd from '../../../UPDATE.md'

export default {
  name: 'update',
  components: {
    updateMd
  }
}
</script>
<style lang="scss">
  .update-log-container {
    width: 70%;
    margin: auto auto;
    p{
      font-size: 18px !important;
      margin: 0 0 10px 60px;
      padding-bottom: 8PX;
      border-bottom: 1PX solid #CCC;
      code{
        margin-right: 8px;
        height: 28px;
      }
    }
    h4{
      font-size: 16px;
    }
  }
</style>
