<template>
  <post-item :id="id"/>
</template>

<script>
  import PostItem from '../../components/Post'
  export default {
    components: {
      PostItem
    },
    data() {
      return {
        id: this.$route.params.id,
      };
    },
  }

</script>

<style>

</style>
