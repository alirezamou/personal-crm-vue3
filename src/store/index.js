import { createStore } from "vuex";
import { collections } from "@/lib/firebase";
import Model from "@codeship/modelist";
import { v4 as uuidv4 } from "uuid";
import {
  getDocs,
  addDoc,
  where,
  query,
  updateDoc,
} from "firebase/firestore/lite";

export const structure = {
  state: {
    contacts: new Model({}),
    isFetching: false,
  },
  getters: {
    contacts(state) {
      return state.contacts;
    },
    findContactById: (state) => (contactId) => {
      return state.contacts.find(contactId)?.fold();
    },
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.record(contact);
    },
    updateContact(state, contact) {
      state.contacts.update(contact.id, contact);
    },
  },
  actions: {
    addContact({ commit }, payload) {
      const { contact, router } = payload;
      const newContact = { id: uuidv4(), ...contact };
      addDoc(collections.contacts, newContact)
        .then((docRef) => {
          commit("addContact", newContact);
          router.push({
            name: "contact",
            params: {
              contactId: newContact.id,
            },
          });
        })
        .catch((err) => console.log("error occured: ", err));
    },
    updateContactById({ commit }, contact) {
      const q = query(collections.contacts, where("id", "==", contact.id));
      getDocs(q)
        .then((querySnapshot) => {
          // it returns just one doc because the query calause 'where' is checked by 'id' which is unique
          querySnapshot.docs.forEach((doc) => {
            updateDoc(doc.ref, contact);
            commit("updateContact", contact);
          });
        })
        .catch((error) => console.log("error occured: ", error));
    },
  },
  modules: {},
  plugins: [
    (store) => {
      store.state.isFetching = true;
      getDocs(collections.contacts)
        .then((contactSnapshot) =>
          contactSnapshot.docs.map((contact) => contact.data())
        )
        .then((cts) => {
          store.state.contacts.record(...cts);
          store.state.isFetching = false;
        })
        .catch((err) =>
          console.log(
            "error happened. CAN'T FETCH 'CONTACTS' FROM DATABASE",
            err
          )
        );
    },
  ],
};

export default () => createStore(structure);
