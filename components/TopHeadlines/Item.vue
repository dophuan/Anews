<template>
  <div class="item-container">
    <el-row :span="24" style="height: 100%">
      <el-col :span="6" style="height: 100%">
        <img class="image-thumbnails" :src="item.urlToImage" alt="">
      </el-col>
      <el-col :span="18" class="item-info">
        <a :href="item.url" target="_blank" class="news-title">
          {{ item.title }}
        </a>
        <div class="item-description">
          {{ item.description }}
        </div>
        <div class="news-meta-data">
          <div class="news-meta-data__source"> {{ item.source.name }}</div>
          <div> {{ publishTime }}</div>
          <div><i class="fas fa-share" aria-hidden="true"></i></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { get } from 'lodash-es'
  import moment from 'moment'
  export default {
    name: 'NewsItem',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    computed: {
      publishTime() {
        let publishedAt = get(this.item, 'publishedAt')
        return publishedAt ? moment(publishedAt).format('YYYY-MM-DD') : 'N/A'
      }
    }
  }
</script>

<style lang="scss">
  .item-container {
    padding: 0 15px 0 15px;
    max-height: 150px;

    .image-thumbnails {
      margin-top: 20px;
      display: inline-block;
      width: 100%;
      max-height: 100px;
      vertical-align: center;
      border-radius: 4px;
    }

    .item-info {
      padding-left: 15px;
      text-align: justify;
      .news-title {
        font-size: 20px;
        font-weight: bold;
        color: black;
        text-decoration: none;
      }

      .item-description {
        padding-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .news-meta-data {
        padding-top: 5px;
        display: flex;
        color: #47494e;

        &__source {
          margin-right: 15px;
        }
      }
    }
  }
</style>
