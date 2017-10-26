<template>
  <div class="p-t-20 p-b-15 tc bg_gradient">
    <div class="m-b-30"></div>
    <div class="container">
      <Row>
        <Col :xs="24" :sm="24" :md="{span: 8, offset:8}" :lg="{span: 8, offset:8}">
        <Card shadow>
          <img src="http://img.hidoge.cn/crp/error.png" alt="" class="max-100 db auto m-b-20">
          页面正在建设中...
        </Card>
        </Col>
      </Row>
    </div>
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
