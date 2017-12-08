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
    if (params.pageSlug) return;

    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;

    // TODO: handle archive pagination
    await store.dispatch('getArticleStubs', {before, after});
  }
};
</script>
