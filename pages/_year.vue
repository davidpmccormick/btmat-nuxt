<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" v-if="shouldDisplay" />
    <nuxt-child />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === 'year') {
      this.$store.commit('setCurrentPage', 1);
    }

    next();
  },
  async asyncData({ params, store }) {
    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;

    await store.dispatch('getArticleStubs', {query: {before, after}});

    return {
      articleStubs: store.state.articleStubs
    };
  },
  computed: {
    shouldDisplay() {
      const pageSlug = this.$route.params.pageSlug;
      const year = this.$route.params.year;
      const pageNumber = this.$route.params.pageNumber;
      const hasYearAndPage = year && pageNumber;

      return !pageSlug && !(hasYearAndPage);
    }
  }
};
</script>
