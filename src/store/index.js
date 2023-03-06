import { createStore } from "vuex";
import { collections } from "@/lib/firebase";
import Model from "@codeship/modelist";
import { v4 as uuidv4 } from "uuid";
import { getDocs, addDoc } from "firebase/firestore/lite";

export default createStore({
  state: {
    contacts: new Model({}),
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
  actions: {
    addContact({ commit }, contact) {
      const newContact = { id: uuidv4(), ...contact };
      addDoc(collections.contacts, newContact)
        .then((docRef) => {
          commit("addContact", newContact);
        })
        .catch((err) => console.log("error occured"));
    },
  },
  modules: {},
  plugins: [
    (store) => {
      getDocs(collections.contacts)
        .then((contactSnapshot) =>
          contactSnapshot.docs.map((contact) => contact.data())
        )
        .then((cts) => {
          store.state.contacts.record(...cts);
        })
        .catch((err) =>
          console.log(
            "error happened. CAN'T FETCH 'CONTACTS' FROM DATABASE",
            err
          )
        );
    },
  ],
});
