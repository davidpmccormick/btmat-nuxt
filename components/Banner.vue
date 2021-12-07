<template>
  <div class="banner">
    <slot />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/utilities/variables";

.banner {
  background: #ffce3c;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 40px;
  font-family: $f-sans;

  a {
    color: $c-green;
  }
}
</style>
