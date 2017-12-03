<template>
  <div class="news">
    <h2>News</h2>
    <transition-group tag="ul" name="news" class="news__list">
      <li class="news__item" v-for="article in articleStubs" :key="article.id">
        <nuxt-link class="news__link" :to="{name: 'year-month-pageSlug', params: {year: article.year, month: article.month, pageSlug: article.slug}}">
          <h3 class="news__heading" v-html="article.title"></h3>
          <div class="news__excerpt" v-html="article.excerpt"></div>
        </nuxt-link>
      </li>
    </transition-group>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '~/components/Pagination';
import { mapState } from 'vuex';

export default {
  components: {
    Pagination
  },
  async fetch({ store, params }) {
    if (params.pageNumber) return; // Handled by news/page/_pageNumber.vue

    return store.dispatch('getArticleStubs');
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>

<style lang="scss">
.news__item {
  margin-bottom: 2em;
}

.news__heading {
  font-family: "brandon-grotesque";
  font-size: 1.7em;
  margin-bottom: 0.2em;
}

.news__excerpt {
  font-size: 1.5em;
  line-height: 1.4;
}

.news__link {
  text-decoration: none;
  color: inherit;
}
</style>
