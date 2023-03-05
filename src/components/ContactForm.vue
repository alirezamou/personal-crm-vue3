<template>
  <form @submit.prevent="addContact">
    <input
      v-model="contactName"
      type="text"
      class="input"
      placeholder="contact me"
      required="true"
    />
    <button type="submit" class="btn">Add contact</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      contactName: "",
    };
  },
  methods: {
    addContact() {
      this.contactName &&
        this.$emitter.emit("add-contact", { amount: this.contactName });
      this.contactName = "";
    },
  },
};
</script>
