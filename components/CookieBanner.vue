<template>
  <transition name="slide-down">
    <div class="cookie-banner" v-if="isActive">
      <div class="container">
        <div class="cookie-banner__inner">
          <p>This site uses cookies</p>
          <button @click="setCookieOk" class="cookie-banner__button">OK</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import cookie from 'cookie-cutter';

export default {
  data() {
    return {
      cookieName: 'BTMAT',
      isActive: false
    };
  },
  mounted() {
    this.isActive = !this.getCookieOk();
  },
  methods: {
    getCookieOk() {
      return cookie.get(this.cookieName);
    },
    setCookieOk() {
      if (!this.isActive) return;

      cookie.set(this.cookieName, 'true', {
        path: '/',
        expires: 'Fri, 31 Dec 2036 23:59:59 GMT'
      });

      this.isActive = false;
    }
  }
};
</script>

<style lang="scss">
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: $c-green;
  color: $c-white;

  &:before {
    content: '';
    height: 6px;
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background: rgba($c-beige, 0.6);
  }
}

.cookie-banner__inner {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  font-family: $f-sans;
}

.cookie-banner__button {
  appearance: none;
  border: 0;
  font-size: 1rem;
  background: $c-white;
  box-shadow: 3px 3px 0 $c-charcoal;
}
</style>
