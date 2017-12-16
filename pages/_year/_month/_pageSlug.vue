<template>
  <div class="two-column">
    <div class="two-column__primary">
      <h2 class="two-column__heading" v-html="article.title"></h2>
      <Timestamp :model="{year: article.year, month: article.month, date: article.date}" />
      <template v-for="component in article.components">
        <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :model="component.value" />
        <CaptionedImage :key="component.id" v-else-if="component.type === 'image'" :model="component.value" />
        <BodyContent v-else :key="component.id" :model="component.value.html" />
      </template>
    </div>
    <div class="two-column__secondary">
      <Archive />
      <ButtonLink class="two-column__button-link" :model="{link: '#', text: 'Donate now', icon: 'donate'}" />
    </div>
  </div>
</template>

<script>
import Archive from '~/components/Archive';
import BodyContent from '~/components/BodyContent';
import ButtonLink from '~/components/ButtonLink';
import CaptionedImage from '~/components/CaptionedImage';
import Standfirst from '~/components/Standfirst';
import Timestamp from '~/components/Timestamp';
import { mapState } from 'vuex';

export default {
  components: {
    Archive,
    BodyContent,
    ButtonLink,
    CaptionedImage,
    Standfirst,
    Timestamp
  },
  scrollToTop: true,
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
  .two-column {
    display: flex;
    margin-bottom: 40px;
  }

  .two-column__primary {
    > * + * {
      margin-top: 1em;
    }

    flex: 2;
    padding-right: 30px;
  }

  .two-column__heading {
    margin-bottom: 0;
  }

  .two-column__secondary {
    flex: 1;
  }
</style>
