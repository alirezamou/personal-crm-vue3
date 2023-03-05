import { createRouter, createWebHistory } from "vue-router";
import NewContact from "../components/NewContact.vue";
import ShowContact from "../components/ShowContact.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: NewContact,
  },
  {
    path: "/contact/:contactId",
    name: "contact",
    component: ShowContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
