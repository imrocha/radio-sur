import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VueFire from 'vuefire'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faPlay, faVolumeHigh, faVolumeLow, faVolumeOff, faVolumeXmark, faPause, faBars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faPlay, faTwitter, faFacebook, faWhatsapp, faVolumeHigh, faVolumeLow, faVolumeOff, faVolumeXmark, faPause, faBars);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueFire);


new Vue({
  render: (h) => h(App),
}).$mount("#app");
