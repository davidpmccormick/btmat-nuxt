<template>
  <nav class="site-nav">
    <ul class="site-nav__list">
      <li v-for="item in navItems"
        class="site-nav__item"
        :key="item.title"
        :data-name="item.activeRoute">
        <nuxt-link class="site-nav__link" :to="item.url">{{ item.title }}</nuxt-link>
        <transition name="fade">
          <ul class="site-nav__sublist" v-if="showSubnav(item)">
            <li class="site-nav__subitem" v-for="subnavItem in item.subnavItems" :key="subnavItem.title">
              <nuxt-link class="site-nav__sublink" :to="subnavItem.url">{{ subnavItem.title }}</nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
    <div class="site-nav__underline"
      :style="{transform: activeElLeft, width: activeElWidth}"></div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'navItems',
      'activeRoute'
    ]),
    activeRoute() {
      return this.navItems.find(item => {
        if (item.subnavItems) {
          return item.subnavItems.find(subnavItem => {
            return this.activeRoute.startsWith(item.name);
          });
        }

        return this.activeRoute.startsWith(item.name);
      });
    },
    activeEl() {
      return this.$el.querySelector(`[data-name="${this.activeRoute}"]`);
    },
    activeElLeft() {
      if (!this.activeEl) return 0;

      return this.activeEl.offsetLeft;
    },
    activeElWidth() {
      if (!this.activeEl) return 0;

      return this.activeEl.offsetWidth;
    }
  },
  methods: {
    showSubnav(item) {
      return item.subnavItems && this.$route.path.match(item.subnavPath);
    }
  }
};
</script>

<style lang="scss">
.site-nav {
  font-family: "brandon-grotesque";
  font-size: 0.9em;
  position: relative;
  padding: 15px 0;
}

.site-nav__list,
.site-nav__sublist {
  display: flex;
}

.site-nav__sublist {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
}

.site-nav__item,
.site-nav__subitem {
  margin-right: 2em;
  color: #555
}

.site-nav__link,
.site-nav__sublink {
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  transition: color 600ms ease;
}

.site-nav__sublink {
  &.nuxt-link-active {
    border-bottom: 0.2em solid dodgerblue;
  }
}

.site-nav__underline {
  position: absolute;
  top: 100%;
  height: 0.2em;
  width: 20px;
  background: dodgerblue;
  transition: transform 600ms ease, width 600ms ease, background 600ms ease;
}
</style>
