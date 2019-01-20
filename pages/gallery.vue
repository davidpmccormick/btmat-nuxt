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
import ButtonLink from '~/components/ButtonLink';
import CaptionedImage from '~/components/CaptionedImage';
import TwoColumns from '~/components/TwoColumns';

export default {
  head: {
    titleTemplate: '%s | Gallery',
    meta: [
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust image gallery' }
    ]
  },
  components: {
    ButtonLink,
    CaptionedImage,
    TwoColumns
  },
  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('getArticleStubs', {query: {per_page: 20}, categories: 5});

      return {
        articleStubs: store.state.articleStubs
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  }
};
</script>
