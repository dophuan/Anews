<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="headlines">Top Headlines</el-menu-item>
      <el-submenu index="keywords">
        <template slot="title">Keywords</template>
        <el-menu-item
          v-for="(keyword, index) in keywords"
          :key="index"
          :index="keyword.key"
        >
          {{ keyword.title }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="login" v-if="email === undefined">Profile</el-menu-item>
      <el-menu-item index="user" v-else>{{ email }}</el-menu-item>
    </el-menu>
    <top-headlines :news-list="newsList"/>
    <register-dialog :dialog-visible="showRegisterForm"/>
    <login-form :dialog-visible="showLoginForm" :list-users="usersList"/>
  </div>
</template>

<script>
  import { get, first } from 'lodash-es'
  import TopHeadlines from '~/components/TopHeadlines'
  import { event } from '../utils/event'
  import RegisterDialog from '~/components/Register'
  import LoginForm from '~/components/Login'
  import NewsModel from "../model/News";

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
        },
        keywords: [
          { title:'bitcoin', key:'bitcoin'},
          { title:'apple', key:'apple'},
          { title:'earthquake', key:'earthquake'},
          { title:'animal', key:'animal'},
        ],
        newsList: [],
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
    created() {
      if (this.query !== undefined) {
        this.fetchKeyword(this.query)
      } else {
        this.fetchData()
      }
    },
    methods: {
      handleSelect(key) {
        if (key === 'login') {
          this.showLoginForm = true
        }
        if (
          key === 'bitcoin' ||
          key === 'apple' ||
          key === 'earthquake' ||
          key === 'animal')
        {
          const query = { 'keyword': key }
          this.$router.push({
            path: this.$router.path,
            query,
          })
          this.fetchKeyword(key)
        }
      },
      fetchData() {
        let model = new NewsModel()
        return model
          .getTopHeadlines()
          .then(({data}) => {
            this.newsList = []
            this.newsList = data.articles
          })
          .catch(() => {
            return null
          })
      },
      fetchKeyword(keyword) {
        let model = new NewsModel()
        return model
          .getKeywordPosts(keyword)
          .then(({data}) => {
            this.newsList = []
            this.newsList = data.articles
          })
          .catch(() => {
            return null
          })
      }
    },
    computed: {
      query() {
        return get(this.$route, 'query.keyword')
      },
      email() {
        return get(first(this.currentLoginUser), 'email')
      }
    }
  }
</script>

<style>

</style>
