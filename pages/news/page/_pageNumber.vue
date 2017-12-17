<script>
export default {
  scrollToTop: true,
  async fetch({ store, params }) {
    await store.dispatch('getArticleStubs', {page: params.pageNumber});
  }
};
</script>
