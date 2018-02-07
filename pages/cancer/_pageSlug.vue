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
        <ButtonLink class="button-link--clear-subnav" />
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import BodyContent from '~/components/BodyContent';
import ButtonLink from '~/components/ButtonLink';
import CaptionedImage from '~/components/CaptionedImage';
import Standfirst from '~/components/Standfirst';
import TwoColumns from '~/components/TwoColumns';

const cancerMap = {
  'burkitt': 12,
  'research': 47,
  'follow-up': 32,
  'future': 36,
  'other-cancers': 42,
  'diagnostic-and-treatment-costs': 575
};

export default {
  head: {
    titleTemplate: '%s | Cancers',
    meta: [
      { hid: 'description', name: 'description', content: 'BTMAT and cancer' }
    ]
  },
  components: {
    BodyContent,
    ButtonLink,
    CaptionedImage,
    Standfirst,
    TwoColumns
  },
  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('getPageById', cancerMap[params.pageSlug]);

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
