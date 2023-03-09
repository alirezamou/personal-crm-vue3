<template>
  <div>
    <h1 class="font-bold text-xl">Create New Contact</h1>
    <ContactForm
      submitButtonLabel="Create"
      @submitContact="(contact) => submitContact(contact)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { extractDetails } from "../lib/transformers";
import ContactForm from "./ContactForm";

export default {
  name: "NewContact",
  components: {
    ContactForm,
  },
  computed: {},
  methods: {
    ...mapActions(["addContact"]),
    submitContact(contact) {
      this.addContact({ contact: extractDetails(contact), router: this.$router });
    },
  },
};
</script>
