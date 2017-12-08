<template>
  <div class="news">
    <NewsList />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  async fetch({ store, params }) {
    if (params.pageNumber) return; // Handled by news/page/_pageNumber.vue

    await store.dispatch('getArticleStubs');
  }
};
</script>
