<template>
  <div>
    <Cards />
  </div>
</template>
<script>
import Cards from '~/components/Cards';

export default {
  head: {
    titleTemplate: '%s | Home',
    meta: [
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust - A UK charity caring for African children with Burkitt lymphoma and other cancers' }
    ]
  },
  components: {
    Cards
  },
  async fetch({ store }) {
    await store.dispatch('getArticleStubs');
  }
};
</script>
