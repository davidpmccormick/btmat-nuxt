<template>
  <div>
    <h2 v-html="article.title"></h2>
    <div v-html="article.content"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({ store, params }) {
    return store.dispatch('getArticleBySlug', params.pageSlug);
  },
  computed: {
    ...mapState([
      'article'
    ])
  }
};
</script>

<style>

</style>
