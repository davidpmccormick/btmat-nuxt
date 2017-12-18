<script>
export default {
  scrollToTop: true,
  async fetch({ store, params, route }) {
    const search = route.query && route.query.search;
    const page = params.pageNumber;

    await store.dispatch('getArticleStubs', {page, search});
  }
};
</script>
