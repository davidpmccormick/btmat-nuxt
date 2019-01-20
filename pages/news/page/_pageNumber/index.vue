<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  head: {
    titleTemplate: '%s | Paginated news',
    meta: [
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust articles' }
    ]
  },
  components: {
    NewsList
  },
  scrollToTop: true,
  async asyncData({ store, params, route, error }) {
    const search = route.query && route.query.search;
    const page = params.pageNumber;

    try {
      await store.dispatch('getArticleStubs', {query: {page, search}});

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
