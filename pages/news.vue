<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';
import { mapState } from 'vuex';

export default {
  components: {
    NewsList
  },
  async fetch({ store, params }) {
    if (params.pageNumber) return; // Handled by news/page/_pageNumber.vue

    await store.dispatch('getArticleStubs');
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>
