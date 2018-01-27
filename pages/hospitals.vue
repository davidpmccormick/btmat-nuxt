<template>
  <div>
    <h2>{{ page.title }}</h2>
    <TwoColumns class="spaced">
      <template slot="primary">
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
  async fetch({ store, params }) {
    await store.dispatch('getPageById', 7);
  },
  computed: {
    ...mapState([
      'page'
    ])
  }
};
</script>
