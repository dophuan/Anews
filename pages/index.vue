<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Top Headlines</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Keywords</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">Profile</el-menu-item>
    </el-menu>
    <top-headlines></top-headlines>
  </div>
</template>

<script>
import TopHeadlines from '~/components/TopHeadlines'
export default {
  components: {
    TopHeadlines,
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>

<style>

</style>
