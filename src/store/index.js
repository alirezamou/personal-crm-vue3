import { createStore } from "vuex";
import Model from "@codeship/modelist";

export default createStore({
  state: {
    contacts: new Model({
      setPrimaryKey: true,
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
  mutations: {
    addContact(state, contact) {
      state.contacts.record(contact);
    },
  },
  actions: {},
  modules: {},
});
