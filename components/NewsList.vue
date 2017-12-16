<template>
  <TwoColumns>
    <template slot="primary">
      <h2>News</h2>
      <ul>
        <li class="news-list__item" v-for="article in articleStubs" :key="article.id">
          <nuxt-link class="news-list__link" :to="{name: 'year-month-pageSlug', params: {year: article.year, month: article.month, pageSlug: article.slug}}">
            <h3 class="news-list__heading" v-html="article.title"></h3>
            <div class="news-list__excerpt" v-html="article.excerpt"></div>
          </nuxt-link>
        </li>
      </ul>
      <Pagination />
    </template>
    <template slot="secondary">
      <Archive />
      <ButtonLink :model="{link: '#', text: 'Donate now', icon: 'donate'}" />
    </template>
  </TwoColumns>
</template>

<script>
import { mapState } from 'vuex';
import Archive from '~/components/Archive';
import ButtonLink from '~/components/ButtonLink';
import Pagination from '~/components/Pagination';
import TwoColumns from '~/components/TwoColumns';

export default {
  components: {
    Archive,
    ButtonLink,
    Pagination,
    TwoColumns
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
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.news-list__link {
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    .news-list__heading {
      color: #4cb685;
    }
  }
}

.news-list__heading {
  transition: color 600ms ease;
}

</style>
