import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import Model from "@codeship/modelist";

import SidebarVue from "@/components/Sidebar.vue";
import ListComp from "@/components/general/ListComp.vue";

function factory(options = {}) {
  const stucture = {
    state: {},
    getters: {
      contacts: jest
        .fn()
        .mockReturnValue(new Model({ data: [{ name: "john" }] })),
    },
  };
  const store = createStore(stucture);
  return mount(SidebarVue, {
    global: {
      plugins: [store],
    },
    ...options,
  });
}

test("Sidebar renders the ListComp", () => {
  const wrapper = factory();
  expect(wrapper.findComponent(ListComp).exists()).toBe(true);
});
