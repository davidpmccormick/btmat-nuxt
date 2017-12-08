<template>
  <div class="news">
    <NewsList v-if="!$route.params.pageSlug" />
    <nuxt-child />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  async fetch({ params, store }) {
    if (params.pageSlug) return; // TODO: check this works on refresh
    // TODO: get article stubs by date
    await store.dispatch('getArticleStubs');
  }
};
</script>
