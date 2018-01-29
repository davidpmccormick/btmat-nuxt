<template>
  <a href="https://uk.virginmoneygiving.com/donation-web/charity?charityId=1004443" class="button-link">
    <span>Donate now</span>
  </a>
</template>

<style lang="scss">
.button-link {
  top: 66px;
  text-decoration: none;
  color: $c-white;
  background: $c-green;
  font-family: $f-sans;
  padding: 0.8em;
  display: flex;
  align-items: center;
  transition: background $ease;
  text-align: center;
  display: block;
  box-shadow: 5px 5px 0 $c-charcoal;

  @media (min-width: $b-large) {
    position: sticky;
  }

  &:hover,
  &:focus {
    background: rgba($c-green, 0.8);
  }

  &.button-link--clear-subnav {
    top: 100px;
  }
}

.button-link--in-card {
  margin-top: 2rem;
}
</style>
