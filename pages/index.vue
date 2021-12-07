<template>
  <div>
    <Banner>
      <p>Peter McCormick passed away peacefully and surrounded by family on November 26th 2021. Donations in his memory for BTMAT may be made via the <a href="https://www.warwick-funerals.co.uk/donations/">Jack Warwick Funeral Service website</a>.</p>
    </Banner>

    <Cards :news-article="firstArticle" />
  </div>
</template>
<script>
import Banner from '~/components/Banner';
import Cards from '~/components/Cards';


export default {
  head: {
    titleTemplate: '%s | Home'
  },
  components: {
    Banner,
    Cards
  },
  async asyncData({ store, error }) {
    try {
      await store.dispatch('getArticleStubs');

      return {
        firstArticle: store.state.articleStubs[0]
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  }
};
</script>
