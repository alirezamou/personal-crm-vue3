<template>
  <div id="content" class="flex-grow">
    <h1>AppContent</h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  name: "AppContent",
  components: {
    ContactForm,
  },
};
</script>
