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

test("twitter link is right", () => {
  const wrapper = factory({});
  // needs to declare other fields like mail and phone.
  //     data() {
  //       return {
  //         contact: {
  //           main: {
  //             twitter: {
  //               value: "twitterLink",
  //             },
  //           },
  //         },
  //       };
  //     },
  //   });
  wrapper.vm.contact.main.twitter.value = "twitterLink";
  expect(wrapper.vm.links.twitter).toBe("https://twitter.com/twitterLink");
});

test("form submits to outside", () => {
  const wrapper = factory({
    data() {
      return {
        contactName: "john",
      };
    },
  });

  const form = wrapper.find("form");
  form.trigger("submit");

  expect(wrapper.emitted().submitContact).toBeTruthy();
});
