<template>

</template>

<script>

export default {
  async fetch({ store, params }) {
    return store.dispatch('getArticleStubs', params.pageNumber);
  }
};
</script>
