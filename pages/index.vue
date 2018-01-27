<template>
  <div>
    <Cards />
  </div>
</template>
<script>
import Cards from '~/components/Cards';

export default {
  components: {
    Cards
  },
  async fetch({ store }) {
    await store.dispatch('getArticleStubs');
  }
};
</script>
