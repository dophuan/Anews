<template>
  <div class="headlines-container">
    <top-headlines-header :news.sync="firstItems"/>
    <h3>News</h3>
    <el-row :span="24" v-for="item in otherNews" :key="item">
      <news-item :item="item"/>
      <el-divider/>
    </el-row>
  </div>
</template>

<script>
  import NewsModel from '../../model/News'
  import TopHeadlinesHeader from './Header'
  import NewsItem from './Item'

  export default {
    name: 'TopHeadlines',
    components: {
      TopHeadlinesHeader,
      NewsItem,
    },
    data: () => {
      return {
        newsList: []
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        let model = new NewsModel()
        return model
        .getTopHeadlines()
        .then(({data}) => {
          this.newsList = data.articles
        })
        .catch(() => {
          return null
        })
      }
    },
    computed: {
      firstItems() {
        return this.newsList.slice(0,3)
      },
      otherNews() {
        return this.newsList.slice(4, this.newsList.length - 1)
      }
    }
  }
</script>

<style lang="scss">
  .headlines-container {

  }
</style>
