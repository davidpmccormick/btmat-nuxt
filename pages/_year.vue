<template>
  <div class="news">
    <NewsList v-if="!pageSlug" :articleStubs="articleStubs" />
    <nuxt-child />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NewsList from '~/components/NewsList';

export default {
  components: {
    NewsList
  },
  data() {
    return {
      pageSlug: ''
    };
  },
  asyncData({ params }) {
    return {
      pageSlug: params.pageSlug
    };
  },
  async fetch({ params, store }) {
    if (params.pageSlug) return; // TODO: check this works on refresh
    // TODO: get article stubs by date
    await store.dispatch('getArticleStubs');
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>
