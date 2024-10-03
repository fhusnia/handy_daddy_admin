import Vue from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './assets/styles/styles.scss'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue2'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faReadme } from '@fortawesome/free-brands-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import 'sweetalert2/dist/sweetalert2.min.css'
export const eventBus = new Vue()

Vue.use(CKEditor)
Vue.use(VueSweetalert2)

library.add(faReadme, faTrash, faLeftLong, faPenToSquare, faFigma)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
