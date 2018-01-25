<template>
  <div class="news">
    <NewsList v-if="shouldDisplay" />
    <nuxt-child />
  </div>
</template>

<script>
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  transition: 'fade',
  async fetch({ params, store }) {
    if (params.pageSlug) return;

    // TODO: work out why params can be
    // { year: '_nuxt', month: '31e907a181f1a92bc226.hot-update.json' }
    // which will mean nextYear is NaN. Hot reload only?

    const nextYear = Number(params.year) + 1;
    const after = `${params.year}-01-01T00:00:00`;
    const before = `${nextYear}-01-01T00:00:00`;

    await store.dispatch('getArticleStubs', {query: {before, after}});
  },
  computed: {
    shouldDisplay() {
      const pageSlug = this.$route.params.pageSlug;
      const year = this.$route.params.year;
      const pageNumber = this.$route.params.pageNumber;
      const hasYearAndPage = year && pageNumber;

      return !pageSlug && !(hasYearAndPage);
    }
  }
};
</script>
