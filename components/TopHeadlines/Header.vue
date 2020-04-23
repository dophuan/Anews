<template>
  <div>
    <el-carousel height="500px" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in news" :key="item">
        <img
          style="width: 100%;"
          id="image"
          :src="item.urlToImage"
          alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'TopHeadlinesHeader',
    props: {
      news: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style>

</style>
