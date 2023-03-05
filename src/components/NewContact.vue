<template>
  <div>
    <h1 class="font-bold text-xl">Create New Contact</h1>
    <ContactForm
      submitButtonLabel="Create"
      @submitContact="(e) => addContact(e)"
    />
  </div>
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "NewContact",
  components: {
    ContactForm,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addContact(payload) {
      this.$emitter.emit("add-contact", payload);
    },
  },
};
</script>
