<template>
  <div class="cards">
    <div class="cards__card">
      <div class="card__header">
        <h2 class="card__heading">Hello</h2>
      </div>
      <div class="card__image-wrap">
        <img src="~/assets/images/home_1.jpg" alt="" class="card__image">
      </div>
      <div class="card__body">
        <div class="card__copy">
          <p>Our Trust addresses the fearful problem of rescuing African children suffering the most aggressive cancer known: <nuxt-link to="/cancer/burkitt">Burkitt’s lymphoma</nuxt-link>. This horrific disease is invariably fatal if untreated, and yet it is potentially cureable.</p>
        </div>
      </div>
    </div>
    <div class="cards__card">
      <div class="card__header">
        <h2 class="card__heading">About the trust</h2>
      </div>
      <div class="card__image-wrap">
        <img src="~/assets/images/home_3.jpg" alt="" class="card__image">
      </div>
      <div class="card__body">
        <div class="card__copy">
          <p>Find out more about <nuxt-link to="/about/beryl-thyer-memorial-africa-trust-btmat">the trust</nuxt-link>, its <nuxt-link to="/about/founder">founder</nuxt-link>, <nuxt-link to="/about/our-work/">our work</nuxt-link> and our <nuxt-link to="/about/supporters">supporters</nuxt-link>.</p>
        </div>
      </div>
    </div>
    <div class="cards__card">
      <div class="card__header">
        <h2 class="card__heading">You can help</h2>
      </div>
      <div class="card__image-wrap">
        <img src="~/assets/images/home_2.jpg" alt="" class="card__image">
      </div>
      <div class="card__body">
        <div class="card__copy">
          <p>Every single penny that you donate goes directly towards supporting the work that we do in Africa.</p>
        </div>
        <ButtonLink class="button-link--in-card" />
      </div>
    </div>
    <div class="cards__card">
      <div class="card__header">
        <h2 class="card__heading">Latest news</h2>
      </div>
      <div class="card__body">
        <ul>
          <NewsPromo class="news-promo--in-card" :model="newsArticle" />
        </ul>
        <Search :inCard="true" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from '~/components/ButtonLink';
import NewsPromo from '~/components/NewsPromo';
import Search from '~/components/Search';

export default {
  props: ['newsArticle'],
  components: {
    ButtonLink,
    NewsPromo,
    Search
  }
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cards__card {
  margin-bottom: 20px;
  width: 100%;
  padding-bottom: 1rem;
  background: $c-white;
  box-shadow: 0 1px 6px rgba($c-charcoal,.1);
  border-radius: 6px;
  overflow: hidden;

  @media (min-width: 600px) {
    margin-right: 10px;
    width: calc(50% - 10px);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}

.card__header,
.card__body {
  padding: 1rem;
}

.card__header {
  background: $c-green;
  color: $c-white;
  position: relative;
}

.card__heading {
  font-size: 1em;
  margin-bottom: 0.3em;
}

.card__image-wrap {
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 6px;
    background: rgba($c-white, 0.3);
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }
}

.card__image {
  width: 100%;
  display: block;
}

.card__copy {
  font-family: $f-sans;

  font-size: 1rem;

  @media (min-width: $b-small) {
    font-size: 1.1rem;
  }

  a {
    color: $c-green;
  }
}
</style>
