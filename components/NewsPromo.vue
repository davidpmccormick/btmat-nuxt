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
@import "./assets/styles/utilities/variables";

.news-promo {
  margin-bottom: 2rem;
  background: $c-white;
  border-radius: 6px;
  transition: all 400ms ease;

  &:not(.news-promo--in-card) {
    padding: 1rem;
    box-shadow: 0 1px 6px rgba($c-charcoal,.1);
  }

  &:hover:not(.news-promo--in-card) {
    box-shadow: 0 1px 30px rgba($c-charcoal,.1);
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
  transition: color $ease;
}

.news-promo__timestamp {
  margin-bottom: 1rem;
}

.news-promo__excerpt {
  font-size: 1.1rem;

  @media (min-width: $b-medium) {
    font-size: 100%;
  }
}
</style>
