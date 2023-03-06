import { createApp } from "vue";
import mitt from "mitt";
import Model from "@codeship/modelist";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/base.css";

const app = createApp(App);

const contacts = new Model({
  setPrimaryKey: true,
  data: [{ name: "jane doe" }, { name: "john doe" }],
});
app.config.globalProperties.$contacts = contacts;

const emitter = mitt();
app.config.globalProperties.$emitter = emitter;

app.use(store).use(router).mount("#app");
