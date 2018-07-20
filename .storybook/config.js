
import { configure } from '@storybook/vue';
import Vue from 'vue';
// import Vuex from 'vuex'; // Vue plugins

const components = require.context('../stories/components', true, /\.js$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
