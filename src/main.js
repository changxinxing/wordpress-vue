import styles from './main.styl'

import Vue from 'vue';
import App from './App.vue'
import { VueMaskDirective } from 'v-mask';

Vue.directive('mask', VueMaskDirective);

new Vue({
	render: createElement => createElement(App),
}).$mount('#app');

