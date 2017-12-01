<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.title">
        <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
        <ul v-if="item.subnavItems">
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
  }
};
</script>

<style>

</style>
