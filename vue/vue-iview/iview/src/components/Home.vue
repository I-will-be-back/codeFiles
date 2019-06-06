<template>
  <div class="home">
    <div class="layout">
      <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
          <div class="layout-logo-left">
            <span class="layout-text">Admin 管理系统</span>
          </div>
          <Menu mode="vertical" theme="dark" active-name="1">
            <MenuItem name="1">
              <Icon type="ios-paper"/>导航一
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-people"/>导航二
            </MenuItem>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-construct"/>导航三
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
            <MenuItem name="4">
              <Icon type="ios-stats"/>Echarts
            </MenuItem>
          </Menu>
        </i-col>
        <i-col :span="spanRight" class="layout-menu-right">
          <div class="layout-header">
            <Button type="text">
              <Icon type="md-menu" size="32"/>
            </Button>
            <div class="userinfo">
              <Dropdown>
                <a href="javascript:void(0)">
                  {{ userName }}
                  <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem>修改密码</DropdownItem>
                  <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      userName: ''
    }
  },
  created () {
    this.userName = JSON.parse(sessionStorage.getItem('user'))
  }
}
</script>

<style scoped>
 .home, .layout {
   width: 100%;
   height: 100%;
 }
 .ivu-row-flex {
   height: 100%;
 }
 .layout-menu-left {
   background-color: #515a6e;
 }
 .userinfo {
   float: right;
   margin: 10px 20px;
 }
 .layout-menu-right {
   background-color: #eee;
 }
 .layout-header {
   background-color: #fff;
   padding: 10px 0;
 }
</style>
