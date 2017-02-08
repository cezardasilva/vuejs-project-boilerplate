import Vue from 'vue'

import {router} from './routers'
import {filters} from './filters'
import Validators from './validators'

import App from '../components/App.vue'

// Start the app on the #app div
new Vue({
	router,
	el: '#app',
	render: h => h(App),
	components: { App }
})
