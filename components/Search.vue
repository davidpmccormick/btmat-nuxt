<template>
  <div class="search">
    <h2 class="search__heading">Search</h2>
    <form class="search__form" action="/news" method="GET">
      <label class="search__label" for="search">Search</label>
      <input @focus="isInputFocused = true" @blur="isInputFocused = false" class="search__input" name="search" />
      <button :class="{'is-active': isInputFocused}" class="search__button">Go</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInputFocused: false
    };
  }
};
</script>

<style lang="scss">
.search {
  margin-bottom: 2rem;
}

.search__heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.search__form {
  position: relative;
}

.search__input {
  font-family: 'proxima-soft';
  font-size: 1rem;
  padding: 0.8rem 1rem;
  width: 100%;
  border: 1px solid $c-testing;
  border-radius: 0;
  transition: border-color 600ms ease;

  &:focus {
    outline: 0;
    border-color: $c-green;
  }
}

.search__button {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  padding: 0 20px;
  font-family: 'proxima-soft';
  appearance: none;
  display: flex;
  border-radius: 0;
  font-size: 1rem;
  transition: all 600ms ease;
  border: 0;
  border-left: 1px solid $c-testing;

  &.is-active {
    border-color: $c-green;
  }

  &:hover,
  &:focus {
    color: $c-white;
    background: $c-green;
    outline: 0;
  }
}

.search__label {
  position: absolute;
  left: -9999px;
  visibility: hidden;
}
</style>
