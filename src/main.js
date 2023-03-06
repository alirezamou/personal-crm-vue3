import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import "./registerServiceWorker";
import "./lib/firebase";
import router from "./router";
import store from "./store";
import "./assets/base.css";

const app = createApp(App);

const emitter = mitt();
app.config.globalProperties.$emitter = emitter;

app.use(store).use(router).mount("#app");
