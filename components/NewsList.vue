<template>
  <TwoColumns>
    <template slot="primary">
      <h2 v-if="search">Search: {{ search }}</h2>
      <h2 v-else>News</h2>
      <ul>
        <NewsPromo v-for="article in articleStubs"
          :key="article.id"
          :model="article" />
      </ul>
      <Pagination />
    </template>
    <template slot="secondary">
      <Search />
      <Archive />
      <ButtonLink :model="{link: '#', text: 'Donate now', icon: 'donate'}" />
    </template>
  </TwoColumns>
</template>

<script>
import { mapState } from 'vuex';
import Archive from '~/components/Archive';
import ButtonLink from '~/components/ButtonLink';
import NewsPromo from '~/components/NewsPromo';
import Pagination from '~/components/Pagination';
import Search from '~/components/Search';
import TwoColumns from '~/components/TwoColumns';

export default {
  components: {
    Archive,
    ButtonLink,
    NewsPromo,
    Pagination,
    Search,
    TwoColumns
  },
  computed: {
    ...mapState([
      'articleStubs'
    ]),
    search() {
      return this.$route.query.search;
    }
  }
};
</script>
