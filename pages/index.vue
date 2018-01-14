<template>
  <div>
    <Intro />
    <Cards />
  </div>
</template>
<script>
import Cards from '~/components/Cards';
import Intro from '~/components/Intro';

export default {
  components: {
    Cards,
    Intro
  },
  async fetch({ store }) {
    await store.dispatch('getArticleStubs');
  }
};
</script>
