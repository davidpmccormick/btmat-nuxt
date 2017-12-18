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
  async fetch({ store, params, route }) {
    if (params.pageNumber) return;

    const search = route.query && route.query.search;

    await store.dispatch('getArticleStubs', {search});
  }
};
</script>
