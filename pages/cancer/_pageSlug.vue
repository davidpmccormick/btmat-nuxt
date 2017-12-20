<template>
  <div>
    <h2>{{ page.title }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const cancerMap = {
  'burkitt': 12,
  'research': 47,
  'follow-up': 32,
  'future': 36,
  'other-cancers': 42,
  'costs': 575
};

export default {
  async fetch({ store, params }) {
    await store.dispatch('getPageById', cancerMap[params.pageSlug]);
  },
  computed: {
    ...mapState([
      'page'
    ])
  }
};
</script>
