<template>
  <div class="body-content">
    <h2 v-html="article.title"></h2>
    <template v-for="component in article.components">
      <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :model="component.value" />
      <CaptionedImage :key="component.id" v-else-if="component.type === 'image'" :model="component.value" />
      <div v-else :key="component.id" v-html="component.value.html" />
    </template>
  </div>
</template>

<script>
import Standfirst from '~/components/Standfirst';
import CaptionedImage from '~/components/CaptionedImage';
import { mapState } from 'vuex';

export default {
  components: {
    Standfirst,
    CaptionedImage
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

<style lang="scss">
  .body-content > * + * {
    margin-top: 1em;
  }
</style>
