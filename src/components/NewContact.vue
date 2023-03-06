<template>
  <div>
    <h1 class="font-bold text-xl">Create New Contact</h1>
    <ContactForm
      submitButtonLabel="Create"
      @submitContact="(contact) => addContact(contact)"
    />
  </div>
</template>

<script>
import { extractDetails } from "../lib/transformers";
import ContactForm from "./ContactForm";

export default {
  name: "NewContact",
  components: {
    ContactForm,
  },
  computed: {},
  methods: {
    addContact(contact) {
      this.$store.commit("addContact", extractDetails(contact));
    },
  },
};
</script>
