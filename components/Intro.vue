<template>
  <div class="intro">
    <p id="typewriter"></p>
  </div>
</template>

<script>
import { init } from 'ityped';

export default {
  mounted() {
    const typewriter = document.querySelector('#typewriter');

    init(typewriter, {
      typeSpeed: 50,
      showCursor: false,
      disableBackTyping: true,
      strings: [`Only one in ten children survive cancer in developing countries.`, `BTMAT's projects in Cameroon rescue between 60% and 65% of its children with cancer.`],
      loop: false,
      backSpeed: 20,
      backDelay: 1000
    });
  }
};
</script>

<style lang="scss">
.intro {
  min-height: 30px;
  color: #555;

  @media (min-width: 680px) {
    margin-top: -30px;
  }

  font-family: "proxima-soft";
  margin-bottom: 2rem;
}
</style>
