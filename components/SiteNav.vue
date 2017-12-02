<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.title">
        <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
        <ul v-if="showSubnav(item)">
          <li v-for="subnavItem in item.subnavItems" :key="subnavItem.title">
            <nuxt-link :to="subnavItem.url">{{ subnavItem.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'navItems'
    ])
  },
  methods: {
    showSubnav(item) {
      return item.subnavItems && this.$route.path.match(item.subnavPath);
    }
  }
};
</script>

<style>

</style>
