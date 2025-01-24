import { createApp } from "vue";
import "./style.css";
import "./index.scss";
import App from "./App.vue";
import router from "./route/index";
import { i18n } from "./plugins/i18n";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./helpers/fontawesome";

import { commonMixin } from "./mixins/common";
import getSize from "./directives/getSize";
const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);

app.mixin(commonMixin);
app.directive("get-size", getSize);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount("#app");
