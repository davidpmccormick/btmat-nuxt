import { storiesOf } from '@storybook/vue';
import ButtonLink from '../../components/ButtonLink.vue';

const stories = storiesOf('Components', module);

stories
  .add('Button Link', () => ({
    components: { ButtonLink },
    template: '<ButtonLink />'
  }));
