<template>
  <div class="search">
    <h2 class="search__heading">Search</h2>
    <form class="search__form" action="/news" method="GET">
      <input class="search__input" name="search" />
      <label class="search__label" for="search">Search</label>
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

.search__label {
  position: absolute;
  left: -9999px;
  visibility: hidden;
}
</style>
