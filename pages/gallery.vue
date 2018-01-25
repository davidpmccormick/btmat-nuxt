<template>
  <div>
    <h2>Gallery</h2>
    <TwoColumns class="spaced">
      <template slot="primary">
        <template v-for="article in articleStubs">
          <CaptionedImage :key="article.id"
            :model="{
              src: article.featuredMedia.media_details.sizes['single-post-thumbnail'].source_url,
              alt: article.title,
              caption: article.title
            }" />
        </template>
      </template>
      <template slot="secondary">
        <ButtonLink />
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonLink from '~/components/ButtonLink';
import CaptionedImage from '~/components/CaptionedImage';
import TwoColumns from '~/components/TwoColumns';

export default {
  components: {
    ButtonLink,
    CaptionedImage,
    TwoColumns
  },
  async fetch({ store, params }) {
    await store.dispatch('getArticleStubs', {query: {per_page: 20}, categories: 5});
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>
