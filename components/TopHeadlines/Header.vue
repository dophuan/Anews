<template>
  <div class="header-container">
    <el-carousel
      height="495px"
      direction="vertical"
      :autoplay="true"
    >
      <el-carousel-item v-for="(item, index) in news" :key="index">
        <img
          id="image"
          :src="item.urlToImage"
          class="background"
          alt=""
          width="660"
          height="495"
        >
        <div class="post-summary">
          <a
            :href="item.url"
            target="_blank"
            class="post-title"
          >
            {{ item.title }}
          </a>
          <div class="post-description">
            {{ item.description }}
          </div>
          <div class="news-meta-data">
            <div class="news-meta-data__source"> {{ item.source.name }}</div>
            <div> {{ publishDate(item.publishedAt) }}</div>
            <div><i class="fas fa-share" aria-hidden="true"></i></div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'TopHeadlinesHeader',
    props: {
      news: {
        type: Array,
        required: true,
      }
    },
    methods: {
      publishDate(date) {
        return moment(date).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style lang="scss">
  .header-container
  {
    .background {
      background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
      border-radius: 4px;
      width: 100%;
    }

    .post-summary {
      position: absolute;
      bottom: 16px;
      left: 16px;
      width: 100%;
      color: white;

      .post-title {
        cursor: pointer;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-decoration: none;
      }
      .post-description {
        padding-top: 5px;
        padding-right: 25px;
        text-align: justify;
      }
      .news-meta-data {
        padding-top: 5px;
        display: flex;

        &__source {
          margin-right: 15px;
        }
      }
    }
  }
</style>
