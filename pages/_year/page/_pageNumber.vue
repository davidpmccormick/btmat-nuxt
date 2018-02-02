<template>
  <NewsList :articleStubs="articleStubs" />
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  head: {
    titleTemplate: '%s | Paginated news',
    meta: [
      { hid: 'description', name: 'description', content: 'BTMAT articles' }
    ]
  },
  components: {
    NewsList
  },
  scrollToTop: true,
  async asyncData({ params, store }) {
    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;
    const page = Number(params.pageNumber);

    await store.dispatch('getArticleStubs', {query: {before, after, page}});

    return {
      articleStubs: store.state.articleStubs
    };
  }
};
</script>
