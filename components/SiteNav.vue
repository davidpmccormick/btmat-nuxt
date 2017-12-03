<template>
  <nav class="site-nav">
    <ul class="site-nav__list">
      <li class="site-nav__item" v-for="item in navItems" :key="item.title">
        <nuxt-link class="site-nav__link" :to="item.url">
          <span @click="handleLinkClick(item)">{{ item.title }}</span>
        </nuxt-link>
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
      :style="{transform: navUnderlineLeft, width: navUnderlineWidth}"></div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      navUnderlineLeft: 0,
      navUnderlineWidth: 0
    };
  },
  mounted() {
    this.setLeftsAndWidths();
    // TODO: this should be based on the route
    this.updateActiveNavUnderline(this.navItems[0]);
  },
  computed: {
    ...mapState([
      'navItems'
    ])
  },
  methods: {
    showSubnav(item) {
      return item.subnavItems && this.$route.path.match(item.subnavPath);
    },
    handleLinkClick(item) {
      this.setLeftsAndWidths();
      this.updateActiveNavUnderline(item);
    },
    updateActiveNavUnderline(item) {
      this.navUnderlineLeft = `translateX(${item.offsetLeft}px)`;
      this.navUnderlineWidth = `${item.offsetWidth}px`;
    },
    setLeftsAndWidths() {
      this.navListLeft = this.$el.querySelector('.site-nav__list')
        .offsetLeft;
      const updatedNavItems = [].slice
        .call(this.$el.querySelectorAll('.site-nav__link'))
        .map((item, index) => {
          const { offsetLeft, offsetWidth } = item;

          return {
            ...this.navItems[index],
            offsetLeft: offsetLeft - this.navListLeft,
            offsetWidth
          };
        });

      this.$store.commit('setNavItems', updatedNavItems);
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
