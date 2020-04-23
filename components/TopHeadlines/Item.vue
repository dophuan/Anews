<template>
  <div>
    <el-row :span="24">
      <el-col :span="6">
        <img style="width: 100%; border-radius: 4px" :src="item.urlToImage" alt="">
      </el-col>
      <el-col :span="18">
        <h3>{{ item.title }}</h3>
        <div>
          {{ item.description }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'NewsItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>

</style>
