<template>
  <div class="post-container">
    <div class="title">
      {{ post.title }}
    </div>
    <div class="author">
      Author(s):<strong> {{ post.author }} </strong>published on {{ publishDate }}
    </div>
    <div class="content">
      {{ post.content }}
    </div>
  </div>
</template>

<script>
  import NewsModel from '../../model/News';
  import { first } from 'lodash-es'
  import moment from 'moment'

  export default {
    name: 'PostItem',
    props: {
      id: {
        type: String,
        require: true,
      }
    },
    data: () => {
      return {
        post: {}
      }
    },
    mounted() {
      this.fetchData()
    },
    computed:{
      publishDate() {
        return moment(this.post.publishedAt).format('hh:mm:ss DD-MM-YYYY')
      }
    },
    methods: {
      fetchData() {
        let model = new NewsModel()
        return model
          .getTopHeadlines()
          .then(({data}) => {
            this.post = first(data.articles.filter((item) => item.publishedAt == this.id))
          })
          .catch(() => {
            return null
          })
      }
    }
  }
</script>

<style lang="scss">
  .post-container {
    .title {
      font-size: 24px;
      font-weight: bold;
      color: black;
    }

    .author {
      padding: 10px 0 10px;
      font-size: 12px;
    }
  }
</style>
