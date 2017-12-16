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
    display: flex;
  }

  .two-columns__primary {
    flex: 2;
    padding-right: 30px;
  }

  .two-columns__secondary {
    flex: 1;
  }
</style>
