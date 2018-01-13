<template>
  <div>
    <Intro />
    <div class="cards">
      <div class="cards__card">
        <div class="card__header">
          <h3 class="card__heading">Welcome</h3>
        </div>
        <div class="card__body">
          <p>Our Trust addresses the fearful problem of rescuing African children suffering the most aggressive cancer known: Burkitt’s lymphoma. This horrific disease is invariably fatal if untreated, and yet it is potentially cureable.</p>
        </div>
      </div>
      <div class="cards__card">
        <div class="card__header">
          <h3 class="card__heading">About the trust</h3>
        </div>
        <div class="card__body">
          <p>Find out more about our trust, its founder, our work and our supporters.</p>
        </div>
      </div>
      <div class="cards__card">
        <div class="card__header">
          <h3 class="card__heading">You can help</h3>
        </div>
        <div class="card__body">
          <p>Every single penny that you donate goes directly towards supporting the work that we do in Africa.</p>
        </div>
      </div>
      <div class="cards__card">
        <div class="card__header">
          <h3 class="card__heading">Latest news</h3>
        </div>
        <div class="card__body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum omnis aut iusto blanditiis quas culpa vel animi ratione iure maiores quibusdam magnam architecto accusantium dolorum odit, eius provident maxime?</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Intro from '~/components/Intro';

export default {
  components: {
    Intro
  }
};
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "proxima-soft";
}

.cards__card {
  background: #47b784;
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  padding-bottom: 1rem;

  @media (min-width: 600px) {
    margin-right: 10px;
    width: calc(50% - 10px);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}

.card__header,
.card__body {
  padding: 1rem;
}

.card__header {
  background: #35485d;
  color: #47b784;
}

.card__heading {
  margin-bottom: 0.3em;
}

.card__body {
  font-size: 1rem;
  color: white;
}
</style>
