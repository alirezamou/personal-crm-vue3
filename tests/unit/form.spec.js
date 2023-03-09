import ContactForm from "../../src/components/ContactForm.vue";
import { mount } from "@vue/test-utils";

function factory(options = {}) {
  return mount(ContactForm, {
    ...options,
  });
}

test("pass down the props", () => {
  const { vm } = factory({
    props: {
      submitButtonLabel: "test",
    },
  });
  expect(vm.submitButtonLabel).toBe("test");
});

test("for name in data", () => {
  const wrapper = factory({
    data() {
      return {
        contactName: "john",
      };
    },
  });

  expect(wrapper.vm.contactName).toBe("john");
  const field = wrapper.find("#contact-name");
  expect(field.element.value).toBe("john");
});
