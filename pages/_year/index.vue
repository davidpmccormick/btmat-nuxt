<template>
   <NewsList :articleStubs="articleStubs" />
</template>

<script>
import NewsList from '~/components/NewsList';
export default {
  components: {
    NewsList
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit('setCurrentPage', 1);
    next();
  },
  async asyncData({ params, store, error }) {
    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;
    try {
      await store.dispatch('getArticleStubs', {query: {before, after}});
      return {
        articleStubs: store.state.articleStubs
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;
      error({ statusCode: status });
    }
  }
};
</script>
