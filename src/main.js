import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./route/index";
import { i18n } from "./plugins/i18n";
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
