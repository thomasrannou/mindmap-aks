import Vue from 'vue'
import App from './App.vue'
import mindmap from './mindmap/vue-mindmap.min.js'
import './mindmap/vue-mindmap.min.css'

Vue.use(mindmap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
