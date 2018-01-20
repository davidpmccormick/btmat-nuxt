<template>
  <div class="search">
    <h2 class="search__heading">Search</h2>
    <form class="search__form" action="/news" method="GET">
      <label class="search__label" for="search">Search</label>
      <input @focus="isInputFocused = true" @blur="isInputFocused = false" class="search__input" name="search"
      :class="{'is-active': isButtonFocused}" />
      <button @focus="isButtonFocused = true" @blur="isButtonFocused = false" :class="{'is-active': isInputFocused}" class="search__button">
        <span>Go</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isButtonFocused: false,
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
  font-family: $f-sans;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  width: 100%;
  border: 1px solid $c-keyline;
  border-radius: 0;
  transition: border-color 600ms ease;

  &:focus,
  &.is-active {
    outline: 0;
    border-color: $c-green;
  }
}

.search__button {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  width: 60px;
  font-family: $f-sans;
  appearance: none;
  background: $c-white;
  display: flex;
  border-radius: 0;
  font-size: 1rem;
  transition: all 600ms ease;
  border: 0;
  border-left: 1px solid $c-keyline;
  display: flex;
  align-items: center;
  justify-content: center;

  &.is-active {
    border-color: $c-green;
  }

  &:hover,
  &:focus {
    color: $c-white;
    background: $c-green;
    border-color: $c-green;
    outline: 0;
  }
}

.search__label {
  position: absolute;
  left: -9999px;
  visibility: hidden;
}
</style>
