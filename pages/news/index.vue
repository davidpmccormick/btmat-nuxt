<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  head: {
    titleTemplate: '%s | News',
    meta: [
      { hid: 'description', name: 'description', content: 'Latest news from Beryl Thyer Memorial Africa Trust' }
    ]
  },
  components: {
    NewsList
  },
  async asyncData({ store, route, error }) {
    try {
      await store.dispatch('getArticleStubs');

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
