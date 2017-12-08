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
    if (params.pageNumber) return;

    await store.dispatch('getArticleStubs');
  }
};
</script>
