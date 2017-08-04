<template>
  <div>
    <div class="m-b-30"></div>
    <Row>
      <Col span="8" offset="8"><img src="http://img.hidoge.cn/crp/error.png" alt="" class="max-100"></Col>
    </Row>
    <div class="p-t-10"></div>
    {{errorText}}
  </div>
</template>
<script>
  export default{
    computed: {
      errorText() {
        return this.$store.getters.temporaryData || '发生了错误...'
      },
    },
  }
</script>
