<template>
  <div>
    <BNavbar sticky type="dark" variant="primary">
      <BContainer>
        <BNavbarBrand to="/">学生管理系统</BNavbarBrand>
        <BNavbarNav>
          <BNavItem to="/">学生列表</BNavItem>
          <BNavItem to="/view">查询学生</BNavItem>
          <BNavItem to="/new">新建学生</BNavItem>
        </BNavbarNav>
      </BContainer>
    </BNavbar>
    <BContainer>
      <RouterView />
    </BContainer>
  </div>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavItem, BContainer } from "bootstrap-vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
    BNavbar,
    BNavbarBrand,
    // BNav,
    BNavItem,
    BContainer,
  },
};
</script>

<style>
</style>
