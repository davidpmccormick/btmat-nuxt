<template>
  <div class="search">
    <h2 class="search__heading">Search</h2>
    <form class="search__form" action="/news" method="GET">
      <label class="search__label" for="search">Search</label>
      <input class="search__input" name="search" />
      <button class="search__button">Go</button>
    </form>
  </div>
</template>

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
  border: 1px solid #ccc;
  border-radius: 0;
  transition: border-color 600ms ease;

  &:focus {
    outline: 0;
    border-color: #4cb685;
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
  border-left: 1px solid #ccc;

  &:hover,
  &:focus {
    color: white;
    background: #47b784;
    outline: 0;
  }
}

.search__label {
  position: absolute;
  left: -9999px;
  visibility: hidden;
}
</style>
