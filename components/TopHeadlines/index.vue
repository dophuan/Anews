<template>
  <div class="headlines-container"></div>
</template>

<script>
  export default {
    name: 'TopHeadlines',
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

      }
    }
  }
</script>

<style lang="scss">
  .headlines-container {

  }
</style>
