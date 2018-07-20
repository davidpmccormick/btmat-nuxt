<template>
  <div class="icon">
    <canvas class="icon__canvas" :height="height" :width="width"></canvas>
    <component :is="icon" />
  </div>
</template>

<script>
import Icons from '~/icons';

export default {
  components: {
    Icons
  },
  props: ['name'],
  computed: {
    icon() {
      return Icons[this.name];
    },
    viewBox() {
      return this.icon.data().viewBox.split(' ');
    },
    height() {
      return this.viewBox[2];
    },
    width() {
      return this.viewBox[3];
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

.icon {
  height: 1em;
  display: inline-block;
  position: relative;
  user-select: none;
}

.icon__canvas {
  display: block;
  height: 100%;
  visibility: hidden;
}

.icon__svg {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
