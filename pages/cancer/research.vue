<template>
  <div>
    <h2>Research</h2>
    <TwoColumns>
      <template slot="primary">
        <ul>
          <li v-for="project in researchProjects.articleStubs"
            :key="project.id">{{ project.title }}</li>
        </ul>
      </template>
      <template slot="secondary">
        <ButtonLink class="button-link--clear-subnav" :model="{link: '#', text: 'Donate now'}" />
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonLink from '~/components/ButtonLink';
import TwoColumns from '~/components/TwoColumns';

export default {
  components: {
    ButtonLink,
    TwoColumns
  },
  async fetch({ store }) {
    await store.dispatch('getResearch');
  },
  computed: {
    ...mapState([
      'researchProjects',
      'newProjects',
      'publicationsAndAbstracts'
    ])
  }
};
</script>

<style>

</style>
