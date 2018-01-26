<template>
  <div>
    <h2>Press</h2>
    <TwoColumns class="spaced">
      <template slot="primary">
        <h3>{{ page.title }}</h3>
        <template v-for="component in page.components">
          <Standfirst :key="component.id" v-if="component.type === 'standfirst'" :model="component.value" />
          <CaptionedImage :key="component.id" v-else-if="component.type === 'image'" :model="component.value" />
          <BodyContent v-else :key="component.id" :model="component.value.html" />
        </template>
      </template>
      <template slot="secondary">
        <ButtonLink />
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BodyContent from '~/components/BodyContent';
import ButtonLink from '~/components/ButtonLink';
import CaptionedImage from '~/components/CaptionedImage';
import Standfirst from '~/components/Standfirst';
import TwoColumns from '~/components/TwoColumns';

export default {
  components: {
    BodyContent,
    ButtonLink,
    CaptionedImage,
    Standfirst,
    TwoColumns
  },
  async fetch({ store }) {
    await store.dispatch('getPostById', 204);
  },
  computed: {
    ...mapState([
      'page'
    ])
  },
  transition: 'page'
};
</script>
