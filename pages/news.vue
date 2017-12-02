<template>
  <div>
    <h2>News</h2>
    <Pagination />
    <transition-group tag="ul" name="news">
      <li v-for="article in articleStubs" :key="article.id">
        <nuxt-link :to="{name: 'year-month-pageSlug', params: {year: article.year, month: article.month, pageSlug: article.slug}}">
          <h3 v-html="article.title"></h3>
          <p v-html="article.excerpt"></p>
        </nuxt-link>
      </li>
    </transition-group>
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

<style>
.news-enter-active,
.news-leave-active {
  transition: all 600ms ease;
}

.news-enter,
.news-leave-active {
  opacity: 0;
  transform: translateX(-100px);
}

.news-enter-active {
  transition-delay: 600ms;
}
</style>
