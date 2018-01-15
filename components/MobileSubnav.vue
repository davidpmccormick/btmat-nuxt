<template>
  <span>
    <span tabindex="0" @keyup.enter="isActive = !isActive" @click="isActive = !isActive"
      class="mobile-subnav__more"
      :class="{'is-active': isActive}"><span v-if="isActive">-</span><span v-else>+</span></span>
    <nav v-if="isActive" class="mobile-subnav__nav">
      <ul class="mobile-subnav__list">
        <li class="mobile-subnav__item" v-for="subnavItem in items" :key="subnavItem.title">
          <nuxt-link class="mobile-subnav__link" :to="subnavItem.url">{{ subnavItem.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </span>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss">
.mobile-subnav__more {
  &:focus {
    outline: 0;
  }

  width: 22px;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;
  background: $c-green;
  color: $c-white;
  border: 1px solid transparent;

  &.is-active {
    color: $c-grey;
    background: white;
    border-color: $c-grey;
  }

  @media(min-width: 680px) {
    display: none;
  }
}

.mobile-subnav__nav {
  padding: 0.5rem 0;

  @media(min-width: 680px) {
    display: none;
  }
}

.mobile-subnav__item {
  padding: 0.2rem 0;
  border-bottom: 1px solid $c-light-grey;

  &:last-child {
    border-bottom: 0;
  }
}

.mobile-subnav__link {
  color: inherit;
  text-decoration: none;

  &.nuxt-link-exact-active {
    color: $c-green;
  }
}
</style>
