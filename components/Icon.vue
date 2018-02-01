<template>
  <div class="icon">
    <canvas class="icon__canvas" height="100" width="100"></canvas>
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
    }
  }
};
</script>

<style lang="scss">
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
