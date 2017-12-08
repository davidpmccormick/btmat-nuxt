<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('getArticleStubs', {page: params.pageNumber});
  }
};
</script>
