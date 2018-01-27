<template>
  <TwoColumns class="article spaced">
    <template slot="primary">
      <h2 class="article__heading" v-html="article.title"></h2>
      <Timestamp class="article__timestamp" :model="{year: article.year, month: article.month, date: article.date}" />
      <template v-for="component in article.components">
        <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :model="component.value" />
        <CaptionedImage :key="component.id" v-else-if="component.type === 'image'" :model="component.value" />
        <BodyContent v-else :key="component.id" :model="component.value.html" />
      </template>
    </template>
    <template slot="secondary">
      <Archive />
      <Search />
      <ButtonLink class="article__button-link" />
    </template>
  </TwoColumns>
</template>

<script>
import Archive from '~/components/Archive';
import BodyContent from '~/components/BodyContent';
import ButtonLink from '~/components/ButtonLink';
import CaptionedImage from '~/components/CaptionedImage';
import Search from '~/components/Search';
import Standfirst from '~/components/Standfirst';
import Timestamp from '~/components/Timestamp';
import TwoColumns from '~/components/TwoColumns';
import { mapState } from 'vuex';

export default {
  components: {
    Archive,
    BodyContent,
    ButtonLink,
    CaptionedImage,
    Search,
    Standfirst,
    Timestamp,
    TwoColumns
  },
  scrollToTop: true,
  async fetch({ store, params, route }) {
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
  .article__heading {
    margin-bottom: 0;
  }

  .article__timestamp {
    margin-bottom: 3rem;
  }
</style>
