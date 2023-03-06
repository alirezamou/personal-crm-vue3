import { createStore } from "vuex";
import Model from "@codeship/modelist";

export default createStore({
  state: {
    contacts: new Model({
      setPrimaryKey: true,
      data: [{ name: "jane doe" }, { name: "john doe" }],
    }),
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
    findContactById: (state) => (contactId) => {
      return state.contacts.find(contactId).fold();
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
