<template>
  <div class="page_header bg-white box_shadow">
    <div class="container">
      <Row>
        <Col span="4" class="p-t-15 p-b-15">
        <img src="http://img.hidoge.cn/logo/logo-300x300.jpg" alt="" height="45px">
        </Col>
        <Col span="20">
        <Menu mode="horizontal" theme="light" active-name="1" class="r">
          <Submenu name="5">
            <template slot="title">
              <Icon type="person"></Icon>
              我是管理员
            </template>
            <Menu-group title="使用">
              <Menu-item name="3-1">新增和启动</Menu-item>
              <Menu-item name="3-2">活跃分析</Menu-item>
              <Menu-item name="3-3">时段分析</Menu-item>
            </Menu-group>
            <Menu-group title="留存">
              <Menu-item name="3-4">用户留存</Menu-item>
              <Menu-item name="3-5">流失用户</Menu-item>
            </Menu-group>
          </Submenu>
        </Menu>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script type="text/babel">
  import FnMixins from '../../assets/js/fn-mixins'

  export default{
    mixins: [FnMixins],
  }
</script>
