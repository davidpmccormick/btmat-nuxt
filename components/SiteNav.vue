<template>
  <nav class="site-nav">
    <ul class="site-nav__list">
      <li v-for="item in navItems"
        class="site-nav__item"
        :class="{'is-route-active': item.routesHandled.indexOf(activeRoute) > -1}"
        :key="item.title">
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
      :style="{width: underlineWidth, transform: underlineTransform}"></div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      itemOffsetLeft: 0,
      itemOffsetWidth: 0
    };
  },
  mounted() {
    this.updateNav();
  },
  updated() {
    this.updateNav();
  },
  computed: {
    ...mapState([
      'navItems',
      'activeRoute'
    ]),
    underlineWidth() {
      return `${this.itemOffsetWidth}px`;
    },
    underlineTransform() {
      return `translateX(${this.itemOffsetLeft}px)`;
    }
  },
  methods: {
    updateNav() {
      const activeMainNavItem = this.$el.querySelector('.is-route-active');

      this.itemOffsetLeft = activeMainNavItem.offsetLeft;
      this.itemOffsetWidth = activeMainNavItem.offsetWidth;
    },
    showSubnav(item) {
      return item.subnavItems && this.$route.path.match(item.subnavPath);
    }
  }
};
</script>

<style lang="scss">
.site-nav {
  font-family: "proxima-soft";
  font-size: 0.9rem;
  position: relative;
  padding: 15px 0;
}

.site-nav__list,
.site-nav__sublist {
  display: flex;
}

.site-nav__sublist {
  background: #47b784;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -48px;
  padding: 14px 0 14px;
  border-bottom: 6px solid white;

  &:before,
  &:after {
    top: 0;
    bottom: 0;
    width: 20px;
    background: #47b784;
    position: absolute;
    content: '';

    @media(min-width: 1000px) {
      width: calc((100vw - 960px) / 2);
    }
  }

  &:before {
    left: -20px;

    @media(min-width: 1000px) {
      left: calc(((100vw - 960px) / 2) * -1);
    }
  }

  &:after {
    right: -20px;

    @media(min-width: 1000px) {
      right: calc(((100vw - 960px) / 2) * -1);
    }
  }
}

.site-nav__item {
  margin-right: 2em;
  color: #555
}

.site-nav__subitem {
  margin-right: 2em;
  color: white;
}

.site-nav__link,
.site-nav__sublink {
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  transition: color 600ms ease;
}

.site-nav__link {
  &:hover,
  &:focus,
  .is-route-active & {
    color: #47b784;
  }
}

.site-nav__sublink {
  position: relative;
  transition: color 600ms ease;

  &:after {
    position: absolute;
    bottom: -0.2em;
    left: 0;
    height: 2px;
    border-radius: 3px;
    width: 0%;
    background: white;
    transition: width 600ms ease;
    content: '';
  }

  &:hover,
  &:focus,
  &.nuxt-link-exact-active {
    &:after {
      width: 100%;
    }
  }
}

.site-nav__underline {
  position: absolute;
  top: 100%;
  height: 3px;
  background: #47b784;
  transition: transform 600ms ease, width 600ms ease, background 600ms ease;
}
</style>
