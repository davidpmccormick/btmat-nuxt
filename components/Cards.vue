<template>
  <div class="cards">
    <div class="cards__card">
      <div class="card__header">
        <h3 class="card__heading">Welcome</h3>
      </div>
      <div class="card__image-wrap">
        <img class="card__image" src="http://fillmurray.com/400/100" alt="" />
      </div>
      <div class="card__body">
        <p>Our Trust addresses the fearful problem of rescuing African children suffering the most aggressive cancer known: <nuxt-link to="/cancer/burkitt">Burkitt’s lymphoma</nuxt-link>. This horrific disease is invariably fatal if untreated, and yet it is potentially cureable.</p>
      </div>
    </div>
    <div class="cards__card">
      <div class="card__header">
        <h3 class="card__heading">About the trust</h3>
      </div>
      <div class="card__image-wrap">
        <img class="card__image" src="http://fillmurray.com/400/100" alt="" />
      </div>
      <div class="card__body">
        <p>Find out more about <nuxt-link to="/about/the-trust">the trust</nuxt-link>, its <nuxt-link to="/about/founder">founder</nuxt-link>, <nuxt-link to="/about/our-work/">our work</nuxt-link> and our <nuxt-link to="/about/supporters">supporters</nuxt-link>.</p>
      </div>
    </div>
    <div class="cards__card">
      <div class="card__header">
        <h3 class="card__heading">You can help</h3>
      </div>
      <div class="card__image-wrap">
        <img class="card__image" src="http://fillmurray.com/400/100" alt="" />
      </div>
      <div class="card__body">
        <p>Every single penny that you donate goes directly towards supporting the work that we do in Africa.</p>
        <ButtonLink class="button-link--in-card" :model="{link: '#', text: 'Donate now'}" />
      </div>
    </div>
    <div class="cards__card">
      <div class="card__header">
        <h3 class="card__heading">Latest news</h3>
      </div>
      <div class="card__body">
        <ul>
          <NewsPromo class="news-promo--in-card" :model="articleStubs[0]" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonLink from '~/components/ButtonLink';
import NewsPromo from '~/components/NewsPromo';

export default {
  components: {
    ButtonLink,
    NewsPromo
  },
  computed: {
    ...mapState([
      'articleStubs'
    ])
  }
};
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "proxima-soft";
}

.cards__card {
  background: $c-green;
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  padding-bottom: 1rem;

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

  a {
    color: $c-white;
  }
}

.card__header {
  position: relative;
  background: $c-petrol;
  color: $c-green;
}

.card__heading {
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
    height: 4px;
    background: rgba(white, 0.3);
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

.card__body {
  font-size: 1rem;
  color: $c-white;
}
</style>
