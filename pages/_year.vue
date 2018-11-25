<template>
  <div class="news">
    <nuxt-child/>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s | News archive',
    meta: [
      { hid: 'description', name: 'description', content: 'BTMAT news archive' }
    ]
  },
  validate ({ params }) {
    // Must be a four-digit number
    return /^\d\d\d\d$/.test(params.year);
  },
  scrollToTop: true
};
</script>
