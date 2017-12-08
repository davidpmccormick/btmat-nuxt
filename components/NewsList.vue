<template>
  <div>
    <h2>News</h2>
    <ul>
      <li class="news-list__item" v-for="article in articleStubs" :key="article.id">
        <nuxt-link class="news-list__link" :to="{name: 'year-month-pageSlug', params: {year: article.year, month: article.month, pageSlug: article.slug}}">
          <h3 class="news-list__heading" v-html="article.title"></h3>
          <div class="news-list__excerpt" v-html="article.excerpt"></div>
        </nuxt-link>
      </li>
    </ul>
    <Archive />
    <Pagination />
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
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>

<style lang="scss">
.news-list__item {
  margin-bottom: 2em;
}

.news-list__excerpt {
  font-size: 1.5em;
  line-height: 1.4;
}

.news-list__link {
  text-decoration: none;
  color: inherit;
}
</style>
