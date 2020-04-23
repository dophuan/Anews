<template>
  <div class="headlines-container">
    <el-row :span="24">
      <el-col :xl="16" :lg="12" :sm="24">
        <h3 style="padding: 10px 0 10px 10px;">
          Top Headlines
        </h3>
        <top-headlines-header
          :news.sync="firstItems"
          style="padding: 0 15px 0;"
        />
      </el-col>
      <el-col :xl="8" :lg="12" :sm="24">
        <h3 style="padding: 10px 0 10px 10px;">
          News
        </h3>
        <el-row :span="24">
          <el-col :span="24" v-for="item in otherNews" :key="item">
            <news-item :item="item"/>
            <el-divider/>
          </el-col>
        </el-row>
      </el-col>
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
