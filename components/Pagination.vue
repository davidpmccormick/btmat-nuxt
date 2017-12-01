<template>
  <p>Current page: {{ currentPage }}. Pages: {{ totalPages }}. Articles: {{ totalArticles }}.</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'totalPages',
      'totalArticles',
      'currentPage'
    ])
  }
};
</script>

<style>

</style>
