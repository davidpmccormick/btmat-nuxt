<template>
  <div class="spaced">
    <h2>Research</h2>
    <TwoColumns>
      <template slot="primary">
        <h3>Research projects</h3>
        <ul class="list research__list">
          <li v-for="project in researchProjects.articleStubs"
            :key="project.id">{{ project.title }}</li>
        </ul>
        <h3>New projects</h3>
        <ul class="list research__list">
          <li v-for="project in newProjects.articleStubs"
            :key="project.id">{{ project.title }}</li>
        </ul>
      </template>
      <template slot="secondary">
        <h3>Publications and abstracts</h3>
        <ul class="list research__list">
          <li v-for="project in publicationsAndAbstracts.articleStubs"
            :key="project.id">{{ project.title }}</li>
        </ul>
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import TwoColumns from '~/components/TwoColumns';

export default {
  head: {
    titleTemplate: '%s | Research',
    meta: [
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust research' }
    ]
  },
  components: {
    TwoColumns
  },
  async asyncData({ store }) {
    await store.dispatch('getResearch');

    return {
      researchProjects: store.state.researchProjects,
      newProjects: store.state.newProjects,
      publicationsAndAbstracts: store.state.publicationsAndAbstracts
    };
  }
};
</script>

<style lang="scss">
@import "./assets/styles/utilities/variables";

.research__list {
  font-size: 1rem;
}

.two-columns__secondary .list {
  margin-bottom: 2em;
}
</style>
