<template>
  <div class="search">
    <h3 v-if="inCard" class="card__heading">Search news</h3>
    <h2 v-else class="search__heading">Search</h2>
    <form class="search__form" action="/news" method="GET">
      <label class="search__label" for="search">Search</label>
      <input @focus="isInputFocused = true" @blur="isInputFocused = false" class="search__input" name="search" id="search"
      :class="{'is-active': isButtonFocused}" />
      <button @focus="isButtonFocused = true" @blur="isButtonFocused = false" :class="{'is-active': isInputFocused}" class="search__button">
        <span>Go</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['inCard'],
  data() {
    return {
      isButtonFocused: false,
      isInputFocused: false
    };
  }
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

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
  padding: 0.8rem calc(1rem + 60px) 0.8rem 1rem;
  width: 100%;
  border: 1px solid $c-keyline;
  border-radius: 0;
  transition: border-color $ease;
  background-clip: padding-box;

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
  transition: all $ease;
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
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
</style>
