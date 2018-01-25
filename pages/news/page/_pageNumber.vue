<script>
export default {
  scrollToTop: true,
  transition: 'fade',
  async fetch({ store, params, route }) {
    const search = route.query && route.query.search;
    const page = params.pageNumber;

    await store.dispatch('getArticleStubs', {query: {page, search}});
  }
};
</script>
