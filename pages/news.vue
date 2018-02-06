<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" v-if="$route.name === 'news'" />
    <nuxt-child v-else />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  head: {
    titleTemplate: '%s | News',
    meta: [
      { hid: 'description', name: 'description', content: 'Latest news from BTMAT' }
    ]
  },
  components: {
    NewsList
  },
  beforeRouteUpdate (to, from, next) {
    if (to.name === 'news') {
      this.$store.commit('setCurrentPage', 1);
    }

    next();
  },
  async asyncData({ store, route, error }) {
    const search = route.query && route.query.search;

    try {
      await store.dispatch('getArticleStubs', {query: {search}});

      return {
        articleStubs: store.state.articleStubs
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  }
};
</script>
