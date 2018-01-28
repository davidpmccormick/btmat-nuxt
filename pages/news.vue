<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" v-if="$route.name === 'news'" />
    <nuxt-child v-else />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  beforeRouteUpdate (to, from, next) {
    if (to.name === 'news') {
      this.$store.commit('setCurrentPage', 1);
    }

    next();
  },
  async asyncData({ store, route }) {
    const search = route.query && route.query.search;
    await store.dispatch('getArticleStubs', {query: {search}});

    return {
      articleStubs: store.state.articleStubs
    };
  }
};
</script>
