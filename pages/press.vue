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
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import BodyContent from '~/components/BodyContent';
import CaptionedImage from '~/components/CaptionedImage';
import Standfirst from '~/components/Standfirst';
import TwoColumns from '~/components/TwoColumns';

export default {
  head: {
    titleTemplate: '%s | Press',
    meta: [
      { hid: 'description', name: 'description', content: 'Beryl Thyer Memorial Africa Trust press' }
    ]
  },
  components: {
    BodyContent,
    CaptionedImage,
    Standfirst,
    TwoColumns
  },
  async asyncData({ store, error }) {
    try {
      await store.dispatch('getPostById', 204);

      return {
        page: store.state.page
      };
    } catch (err) {
      const maybeStatus = err.response && err.response.status;
      const status = maybeStatus || 404;

      error({ statusCode: status });
    }
  }
};
</script>
