import Vue from "vue";
import App from "./App.vue";
import VueLazyload from 'vue-lazyload'
import { BootstrapVue } from "bootstrap-vue";
import VueFire from 'vuefire'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faPlay, faVolumeHigh, faVolumeLow, faVolumeOff, faVolumeXmark, faPause, faBars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import VueRouter from "vue-router";
import routes from "./routes";

library.add(faUserSecret, faPlay, faTwitter, faFacebook, faWhatsapp, faVolumeHigh, faVolumeLow, faVolumeOff, faVolumeXmark, faPause, faBars);

Vue.use(VueLazyload)


Vue.use(Router);
const router = new Router({
	mode: 'hash',
	base: 'https://radiosurfm.com.ar',
	routes,
});

const loadimage = require('./assets/loading.gif')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: loadimage,
  loading: loadimage,
  attempt: 1
})

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueFire);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
