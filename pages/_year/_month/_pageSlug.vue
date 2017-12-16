<template>
  <div class="body-content">
    <div class="body-content__primary">
      <h2 v-html="article.title"></h2>
      <template v-for="component in article.components">
        <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :model="component.value" />
        <CaptionedImage :key="component.id" v-else-if="component.type === 'image'" :model="component.value" />
        <div v-else :key="component.id" v-html="component.value.html" />
      </template>
    </div>
    <div class="body-content__secondary">
      <Archive />
    </div>
  </div>
</template>

<script>
import Archive from '~/components/Archive';
import CaptionedImage from '~/components/CaptionedImage';
import Standfirst from '~/components/Standfirst';
import { mapState } from 'vuex';

export default {
  components: {
    Archive,
    CaptionedImage,
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

<style lang="scss">
  .body-content {
    display: flex;
  }

  .body-content__primary {
    * + * {
      margin-top: 1em;
    }

    flex: 2;
    padding-right: 30px;
  }

  .body-content__secondary {
    flex: 1;
  }
</style>
