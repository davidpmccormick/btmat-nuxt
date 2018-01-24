<template>
  <div class="two-columns">
    <article class="two-columns__primary">
      <slot name="primary"></slot>
    </article>
    <aside class="two-columns__secondary">
      <slot name="secondary"></slot>
    </aside>
  </div>
</template>

<style lang="scss">
.two-columns {
  margin-bottom: 2rem;

  @media (min-width: $b-large) {
    display: flex;
  }
}

.two-columns__primary {
  flex: 2;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  position: relative;

  @media (min-width: $b-large) {
    padding-right: 30px;
    margin-bottom: 0;
  }

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100px;
    background: $c-green;
    bottom: 0;
    left: 0;
  }
}

.two-columns__secondary {
  flex: 1;

  @media (min-width: $b-large) {
    padding-left: 20px;
    border-left: 1px solid $c-keyline;
  }
}
</style>
