<template>
  <div>
    <h1 class="font-bold text-3xl">Show Contact</h1>
    <p v-if="!contact" class="text-slate-500 text-center text-3xl">Contact not exists!</p>
    <ContactForm v-else submitButtonLabel="Update Contact" :inContact="contact" @submitContact="submit" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { extractDetails } from "@/lib/transformers";
import ContactForm from "./ContactForm.vue";

export default {
  name: "ShowContact",
  data() {
    return {
      contactId: this.$route.params.contactId,
    };
  },
  components: {
    ContactForm,
  },
  computed: {
    contact() {
      return this.$store.getters.findContactById(this.contactId);
    }
  },
  methods: {
    ...mapActions(["updateContactById"]),
    submit(data) {
      const contact = {
        id: this.contactId,
        ...extractDetails(data)
      }
      this.updateContactById(contact);
    },
  },
  watch: {
    $route: {
      handler() {
        this.contactId = this.$route.params.contactId;
      },
    },
  },
};
</script>
