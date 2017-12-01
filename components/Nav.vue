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
export default {
  data() {
    return {
      navItems: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'News',
          url: '/news'
        },
        {
          title: 'Cancer',
          url: '/cancer/burkitt',
          subnavItems: [
            {
              title: 'Burkitt',
              url: '/cancer/burkitt'
            },
            {
              title: 'Research',
              url: '/cancer/research'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>

</style>
