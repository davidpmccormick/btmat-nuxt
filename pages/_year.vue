<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" v-if="$route.name === 'year'" />
    <nuxt-child v-else />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  head: {
    titleTemplate: '%s | News archive',
    meta: [
      { hid: 'description', name: 'description', content: 'BTMAT news archive' }
    ]
  },
  components: {
    NewsList
  },
  validate ({ params }) {
    // Must be a four-digit number
    return /^\d\d\d\d$/.test(params.year);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name === 'year') {
      this.$store.commit('setCurrentPage', 1);
    }

    next();
  },
  async asyncData({ params, store, error }) {
    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;

    try {
      await store.dispatch('getArticleStubs', {query: {before, after}});

      return {
        articleStubs: store.state.articleStubs
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  },
  scrollToTop: true
};
</script>
