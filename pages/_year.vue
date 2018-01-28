<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" v-if="$route.name === 'year'" />
    <nuxt-child v-else />
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
  }
};
</script>
