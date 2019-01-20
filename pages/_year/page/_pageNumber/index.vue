<template>
  <NewsList :articleStubs="articleStubs" />
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
  async asyncData({ params, store, error }) {
    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;
    const page = Number(params.pageNumber);

    try {
      await store.dispatch('getArticleStubs', {query: {before, after, page}});

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
