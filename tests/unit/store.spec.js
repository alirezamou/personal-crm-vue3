import { createStore } from "vuex";
import { cloneDeep } from "lodash";
import { structure } from "../../src/store/index";
import { getDocs } from "firebase/firestore/lite";

jest.mock("firebase/firestore/lite");

getDocs.mockResolvedValue({ docs: [] });

function factoryStore() {
  const cloneStructure = cloneDeep(structure);
  return createStore(cloneStructure);
}

describe("mutations", () => {
  test("#addContact", () => {
    const store = factoryStore();
    store.commit("addContact", { name: "john" });
    expect(store.state.contacts.all()).toEqual([{ name: "john" }]);
  });
});

describe("store", () => {
  test("contacts is an empty collection", () => {
    const store = factoryStore();
    expect(store.state.contacts.all()).toEqual([]);
  });
});
