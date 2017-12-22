<template>
  <div class="site-nav-wrap">
    <a class="site-nav-menu-trigger" @click="setIsMobileNavShown(!isMobileNavShown)">menu</a>
    <nav class="site-nav">
      <ul class="site-nav__list">
        <li v-for="item in navItems"
          class="site-nav__item"
          :class="{'is-route-active': item.routesHandled.indexOf(activeRoute) > -1}"
          :key="item.title">
          <nuxt-link class="site-nav__link" :to="item.url">{{ item.title }}</nuxt-link>
          <MobileSubnav v-if="item.subnavItems" :items="item.subnavItems" />
          <transition name="fade">
            <nav class="site-nav__subnav" v-show="showSubnav(item)">
              <ul class="site-nav__sublist container">
                <li class="site-nav__subitem" v-for="subnavItem in item.subnavItems" :key="subnavItem.title">
                  <nuxt-link class="site-nav__sublink" :to="subnavItem.url">{{ subnavItem.title }}</nuxt-link>
                </li>
              </ul>
            </nav>
          </transition>
        </li>
      </ul>
      <div class="site-nav__underline"
        :class="{'is-white': underlineIsWhite}"
        :style="{width: underlineWidth, transform: underlineTransform}"></div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MobileSubnav from '~/components/MobileSubnav';

const whiteSubnavItems = [
  'cancer-pageSlug'
];

export default {
  components: {
    MobileSubnav
  },
  data() {
    return {
      itemOffsetLeft: 0,
      itemOffsetWidth: 0,
      isActive: false
    };
  },
  mounted() {
    this.updateNav();
    window.addEventListener('resize', this.updateNav);
  },
  updated() {
    this.updateNav();
  },
  computed: {
    ...mapState([
      'navItems',
      'activeRoute',
      'isMobileNavShown'
    ]),
    underlineIsWhite() {
      return whiteSubnavItems.indexOf(this.activeRoute) > -1;
    },
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
    },
    setIsMobileNavShown(value) {
      this.$store.commit('setIsMobileNavShown', value);
    }
  }
};
</script>

<style lang="scss">
.site-nav-menu-trigger {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 4;
  text-transform: uppercase;
  color: white;
  background: #4cb685;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;

  .is-mobile-nav-shown & {
    background: white;
    color: #555;
    border: 1px solid #555;
  }

  @media(min-width: 680px) {
    display: none;
  }
}

.site-nav {
  display: none;
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 3;
  padding: 20px;

  font-family: "proxima-soft";
  font-size: 0.9rem;

  .is-mobile-nav-shown & {
    display: block;
  }

  @media(min-width: 680px) {
    display: block;
    padding: 15px 0;
    position: relative;
    overflow: visible;
  }
}

.site-nav__list,
.site-nav__sublist {
  @media(min-width: 680px) {
    display: flex;
  }
}

.site-nav__subnav {
  display: none;
  background: #47b784;
  left: -20px;
  right: -20px;
  bottom: -40px;
  padding: 8px 0 12px;
  background: #47b784;

  @media(min-width: 680px) {
    display: block;
    position: absolute;
  }

  @media(min-width: 1000px) {
    left: calc(((100vw - 960px) / 2) * -1);
    right: calc(((100vw - 960px) / 2) * -1);
  }

  &:after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    right: 0;
    height: 4px;
    background: rgba(255, 255, 255, 0.7);
  }
}

.site-nav__item {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  color: #555;

  @media(min-width: 680px) {
    margin-right: 2em;
    padding: 0;
    border-bottom: 0;
  }
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
  font-size: 0.7rem;

  &:after {
    position: absolute;
    bottom: -0.2em;
    left: 0;
    height: 2px;
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
  display: none;
  position: absolute;
  top: 100%;
  height: 3px;
  background: #47b784;
  transition: transform 600ms ease, width 600ms ease, background 600ms ease, color 600ms ease;

  &.is-white {
    background: white;
  }

  @media(min-width: 680px) {
    display: block;
  }
}
</style>
