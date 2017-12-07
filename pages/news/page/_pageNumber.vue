<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch('getArticleStubs', params.pageNumber);
  }
};
</script>
