```
<template>
  <div>
    <hs-date-picker
      @change="daterangeHandle"
    ></hs-date-picker>
  </div>
</template>
<script>
  export default {
    methods: {
      daterangeHandle: function (dateVal) {
        // doing someing
      }
    }
  }
</script>
```