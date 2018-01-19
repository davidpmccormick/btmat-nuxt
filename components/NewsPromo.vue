<template>
  <li class="news-promo">
    <nuxt-link class="news-promo__link"
      :to="{name: 'year-month-pageSlug',
      params: {year: model.year, month: model.month, pageSlug: model.slug}}">
      <h3 class="news-promo__heading" v-html="model.title"></h3>
      <Timestamp class="news-promo__timestamp"
        :model="{year: model.year, month: model.month, date: model.date}" />
      <div class="news-promo__excerpt" v-html="model.excerpt"></div>
    </nuxt-link>
  </li>
</template>

<script>
import Timestamp from '~/components/Timestamp';

export default {
  props: ['model'],
  components: {
    Timestamp
  }
};
</script>

<style lang="scss">
.news-promo {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $c-keyline;

  &.news-promo--in-card {
    border-bottom: 0;
    margin-bottom: 0;
  }
}

.news-promo__link {
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    outline: 0;

    .news-promo__heading {
      color: $c-green;
    }
  }
}

.news-promo__heading {
  margin-bottom: 0.5rem;
  transition: color 600ms ease;
}

.news-promo__timestamp {
  margin-bottom: 1rem;
}
</style>
