<template>
  <div class="footer">
    <div class="container">
      <p>&copy; Beryl Thyer Memorial Africa Trust. Registered Charity Number 1112603.</p>
      <div class="footer__social">
        <a class="footer__link" href="#">twitter</a>
        <a class="footer__link" href="#">facebook</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.footer {
  font-family: 'proxima-soft';
  font-size: 1rem;
  padding: 50px 0;
  border-top: 3px solid rgba(#f5f5f5, 0.8);
  color: #555;
}

.footer__social {
  margin-top: 1em;
}

.footer__link {
  text-decoration: none;
  color: #47b784;
  margin-right: 1em;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: 0;
    left: 0;
    width: 0;
    background: #47b784;
    transition: width 600ms ease;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
}
</style>
