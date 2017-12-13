<template>
  <div>
    <h2 v-html="article.title"></h2>
    <template v-for="component in article.components">
      <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :value="component.value" />
    </template>
  </div>
</template>

<script>
import Standfirst from '~/components/Standfirst';
import { mapState } from 'vuex';

export default {
  components: {
    Standfirst
  },
  async fetch({ store, params }) {
    await store.dispatch('getArticleBySlug', params.pageSlug);
  },
  computed: {
    ...mapState([
      'article'
    ])
  }
};
</script>

<style>

</style>
