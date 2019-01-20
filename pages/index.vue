<template>
  <div>
    <Cards />
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
  async fetch({ store, error }) {
    try {
      await store.dispatch('getArticleStubs');
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  }
};
</script>
