<template>
  <div class="site-nav-wrap">
    <a class="site-nav-menu-trigger" @click="setIsMobileNavShown(!isMobileNavShown)">menu</a>
    <transition name="scale">
      <nav v-show="isMobileNavShown" class="site-nav">
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
          :style="{width: underlineWidth, transform: underlineTransform}"></div>
      </nav>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MobileSubnav from '~/components/MobileSubnav';

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
  top: 1rem;
  right: 20px;
  z-index: 4;
  text-transform: uppercase;
  color: $c-white;
  background: $c-green;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.2rem 0.4rem;
  border: 3px solid $c-green;
  box-shadow: 3px 3px 0 $c-charcoal;
  transition: all $ease;

  .is-mobile-nav-shown & {
    background: white;
    color: $c-grey;
    border-color: $c-charcoal;
  }

  @media (min-width: $b-large) {
    display: none;
  }
}

.site-nav {
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $c-white;
  z-index: 3;
  padding: 10px 20px 20px;
  font-family: $f-sans;
  font-size: 0.9rem;

  @media (min-width: $b-large) {
    display: block !important;
    padding: 10px 0;
    position: relative;
    overflow: visible;
  }
}

.site-nav__list,
.site-nav__sublist {
  @media (min-width: $b-large) {
    display: flex;
  }
}

.site-nav__subnav {
  display: none;
  background: $c-beige;
  left: -20px;
  right: -20px;
  top: 100%;
  margin-top: 1px;
  padding-top: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid $c-keyline;

  @media (min-width: $b-large) {
    display: block;
    position: absolute;

    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      height: 5px;
      background: rgba($c-beige, 0.6);
      margin-top: 1px;
    }
  }

  @media (min-width: $b-x-large) {
    left: calc(((100vw - 960px) / 2) * -1);
    right: calc(((100vw - 960px) / 2) * -1);
  }
}

.site-nav__item {
  padding: 1rem 0;
  border-bottom: 1px solid $c-keyline;

  @media (min-width: $b-large) {
    margin-right: 1.6em;
    padding: 0;
    border-bottom: 0;
  }
}

.site-nav__subitem {
  margin-right: 1.4em;
}

.site-nav__link,
.site-nav__sublink {
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  transition: color $ease;
}

.site-nav__link {
  &:hover,
  &:focus,
  .is-route-active & {
    color: $c-green;
  }
}

.site-nav__sublink {
  position: relative;
  font-size: 0.7rem;
  padding: 0.3em 0 0.2em;
  display: inline-block;

  &:hover,
  &:focus,
  &.nuxt-link-exact-active {
    color: $c-green;
  }
}

.site-nav__underline {
  display: none;
  position: absolute;
  top: 100%;
  height: 2px;
  border-radius: 4px;
  background: $c-green;
  transition: transform $ease, width $ease, background $ease, color $ease;

  @media (min-width: $b-large) {
    display: block;
  }
}
</style>
