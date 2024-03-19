import { createApp } from "vue";
import "./style.css";
import "./assets/scss/_btn-common.scss";
import "./assets/scss/_checkbox-common.scss";
import App from "./App.vue";
import router from "./route/index";
import { i18n } from "./plugins/i18n";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";

const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(pinia);
app.mount("#app");
