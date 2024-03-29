<template>
  <div>
    <h2 class="article__heading" v-html="article.title"></h2>
    <Timestamp class="article__timestamp" :model="{year: article.year, month: article.month, date: article.date}" />
    <TwoColumns class="article spaced">
      <template slot="primary">
        <template v-for="component in article.components">
          <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :model="component.value" />
          <CaptionedImage :key="component.id" v-else-if="component.type === 'image'" :model="component.value" />
          <BodyContent v-else :key="component.id" :model="component.value.html" />
        </template>

        <div class="article__related" v-if="article.relatedArticles && article.relatedArticles.length > 0">
          <h2>Related articles</h2>
          <ul>
            <NewsPromo v-for="relatedArticle in article.relatedArticles" :key="relatedArticle.slug" :model="{
              year: relatedArticle.year,
              month: relatedArticle.month,
              date: relatedArticle.date,
              slug: relatedArticle.slug,
              title: relatedArticle.title,
              excerpt: relatedArticle.excerpt
            }" />
          </ul>
        </div>
      </template>
      <template slot="secondary">
        <Archive />
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import Archive from '~/components/Archive';
import BodyContent from '~/components/BodyContent';
import CaptionedImage from '~/components/CaptionedImage';
import NewsPromo from '~/components/NewsPromo';
import Standfirst from '~/components/Standfirst';
import Timestamp from '~/components/Timestamp';
import TwoColumns from '~/components/TwoColumns';

export default {
  head() {
    return {
      titleTemplate: `%s | ${this.article.title}`,
      meta: [
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Beryl Thyer Memorial Africa Trust'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.url
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@btmat'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        }
      ].concat(this.imageMeta).filter(Boolean)
    };
  },
  components: {
    Archive,
    BodyContent,
    NewsPromo,
    CaptionedImage,
    Standfirst,
    Timestamp,
    TwoColumns
  },
  async asyncData({ store, params, route, error }) {
    try {
      await store.dispatch('getArticleBySlug', params.pageSlug);

      return {
        article: store.state.article,
        url: `https://btmat.org.uk/${params.pageSlug}`
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  },
  computed: {
    imageMeta() {
      const firstImage = this.article.components.find(c => c.type === 'image');

      if (!firstImage) return [];

      return [{
        hid: 'og:image',
        name: 'og:image',
        content: firstImage.value.src
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: firstImage.value.src
      }, {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: firstImage.value.alt
      }];
    },
    description() {
      return this.article.components.find(a => a.type === 'standfirst') && this.article.components.find(a => a.type === 'standfirst').value.html || 'Latest news from BTMAT';
    }
  },
  scrollToTop: true
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

  .article__heading {
    margin-bottom: 0.4em;

    @media (min-width: $b-large) {
      padding-right: 26%;
    }

    @media (min-width: $b-x-large) {
      padding-right: 30%;
    }
  }

  .article__timestamp {
    margin-bottom: 3rem;
  }

  .article__related {
    padding-top: 2em;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 3px;
      width: 100px;
      background: $c-green;
      top: 0;
      left: 0;
    }
  }
</style>
