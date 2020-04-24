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
      <el-menu-item index="login">Profile</el-menu-item>
    </el-menu>
    <top-headlines></top-headlines>
    <register-dialog :dialog-visible="showRegisterForm"/>
    <login-form :dialog-visible="showLoginForm" :list-users="usersList"/>
  </div>
</template>

<script>
  import { isEmpty } from 'lodash-es'
  import TopHeadlines from '~/components/TopHeadlines'
  import { event } from '../utils/event'
  import RegisterDialog from '~/components/Register'
  import LoginForm from '~/components/Login'

  export default {
    components: {
      TopHeadlines,
      RegisterDialog,
      LoginForm,
    },
    data() {
      return {
        activeIndex: 'headlines',
        showRegisterForm: false,
        showLoginForm: false,
        usersList: [],
        currentLoginUser: {
          email: '',
          pass: '',
        }
      };
    },
    mounted() {
      this.usersList = JSON.parse(localStorage.getItem('UsersList') || '[]')
      event.on('dialog.show_register_form', () => {
        this.showRegisterForm = true
      })

      event.on('dialog.hide_register_form', () => {
        this.showRegisterForm = false
      })

      event.on('dialog.hide_login_form', () => {
        this.showLoginForm = false
      })

      event.on('dialog.set_login_user', (user) => {
        this.showLoginForm = false
        this.currentLoginUser = user
      })

    },
    beforeDestroy() {
      event.off('dialog.hide_register_form')
      event.off('dialog.hide_register_form')
      event.off('dialog.set_login_user')
      event.off('dialog.hide_login_form')
    },
    methods: {
      handleSelect(key) {
        if (key === 'login') {
          this.showLoginForm = true
        }
      }
    }
  }
</script>

<style>

</style>
