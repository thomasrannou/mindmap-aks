import Vue from 'vue'
import App from './App.vue'
import Mindmap from 'vue-mindmap'

import 'vue-mindmap/dist/vue-mindmap.css'

Vue.use(Mindmap)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})