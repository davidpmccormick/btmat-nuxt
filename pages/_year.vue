<template>
  <div class="news">
    <h2>News</h2>
    <ul v-if="!year">
      <li class="news__item" v-for="article in articleStubs" :key="article.id">
        <nuxt-link class="news__link" :to="{name: 'year-month-pageSlug', params: {year: article.year, month: article.month, pageSlug: article.slug}}">
          <h3 class="news__heading" v-html="article.title"></h3>
          <div class="news__excerpt" v-html="article.excerpt"></div>
        </nuxt-link>
      </li>
    </ul>
    <Archive />
    <Pagination />
    <nuxt-child />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Archive from '~/components/Archive';
import Pagination from '~/components/Pagination';

export default {
  components: {
    Archive,
    Pagination
  },
  asyncData({ params }) {
    return {
      year: params.year
    };
  },
  async fetch({ params, store }) {
    if (params.pageSlug) return;

    await store.dispatch('getArticleStubs');
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>

<style>

</style>
