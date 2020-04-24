<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="headlines">Top Headlines</el-menu-item>
      <el-submenu index="keywords">
        <template slot="title">Keywords</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="register">Profile</el-menu-item>
    </el-menu>
    <top-headlines></top-headlines>
    <register-dialog :dialog-visible="showRegisterForm"/>
  </div>
</template>

<script>
import TopHeadlines from '~/components/TopHeadlines'
import { event } from '../utils/event'
import RegisterDialog from '~/components/Register'

export default {
  components: {
    TopHeadlines,
    RegisterDialog,
  },
  data() {
    return {
      activeIndex: 'headlines',
      showRegisterForm: false,
    };
  },
  mounted() {
    event.on('dialog.hide_register_form', () => {
      this.showRegisterForm = false
    })
  },
  beforeDestroy() {
    event.off('dialog.hide_register_form')
  },
  methods: {
    handleSelect(key) {
      if (key === 'register') {
        this.showRegisterForm = true
      }
    }
  }
}

</script>

<style>

</style>
