<template>
  <div>
    <h2>News</h2>
    <Pagination />
    <ul>
      <li v-for="article in articleStubs" :key="article.id">{{ article.title }}</li>
    </ul>
  </div>
</template>

<script>
import Pagination from '~/components/Pagination';
import { mapState } from 'vuex';

export default {
  components: {
    Pagination
  },
  async fetch({ store, params }) {
    if (params.pageNumber) return; // Handled by news/page/_pageNumber.vue

    return store.dispatch('getArticleStubs');
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>
