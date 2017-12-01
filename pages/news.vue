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
import { getArticleStubs } from '~/services/wordpress';
import { mapState } from 'vuex';

export default {
  components: {
    Pagination
  },
  async fetch({ store }) {
    const { articleStubs, totalPages, totalArticles, currentPage } = await getArticleStubs();

    store.commit('setCurrentPage', currentPage);
    store.commit('setTotalPages', totalPages);
    store.commit('setTotalArticles', totalArticles);
    store.commit('setArticleStubs', articleStubs);
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>
