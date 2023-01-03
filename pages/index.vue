<template>
  <div>
    <Cards :news-article="firstArticle" />
  </div>
</template>
<script>
import Cards from '~/components/Cards';


export default {
  head: {
    titleTemplate: '%s | Home'
  },
  components: {
    Cards
  },
  async asyncData({ store, error }) {
    try {
      await store.dispatch('getArticleStubs');

      return {
        firstArticle: store.state.articleStubs[0]
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  }
};
</script>
