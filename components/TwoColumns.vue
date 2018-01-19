<template>
  <div class="two-columns">
    <div class="two-columns__primary">
      <slot name="primary"></slot>
    </div>
    <div class="two-columns__secondary">
      <slot name="secondary"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.two-columns {
  margin-bottom: 2rem;

  @media(min-width: 680px) {
    display: flex;
  }
}

.two-columns__primary {
  flex: 2;
  margin-bottom: 2rem;

  @media(min-width: 680px) {
    padding-right: 30px;
    margin-bottom: 0;
  }
}

.two-columns__secondary {
  flex: 1;
  @media(min-width: 680px) {
    padding-left: 20px;
    border-left: 1px solid $c-testing;
  }
}
</style>
