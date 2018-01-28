<template>
  <div class="news">
    <NewsList :articleStubs="articleStubs" />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  scrollToTop: true,
  async asyncData({ store, params, route }) {
    const search = route.query && route.query.search;
    const page = params.pageNumber;

    await store.dispatch('getArticleStubs', {query: {page, search}});

    return {
      articleStubs: store.state.articleStubs
    };
  }
};
</script>
