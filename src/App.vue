<template>
  <div id="app" class="container">
    <Sidebar />
    <AppContent />
  </div>
</template>

<script>
import AppContent from "./components/AppContent.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  data() {
    return {
    }
  },
  mounted() {
    this.$emitter.on("add-contact", (payload) => this.addContact(payload));
  },
  components: {
    AppContent,
    Sidebar,
  },
  methods: {
    addContact(payload) {
      this.contacts.record({ name: payload.amount });
    },
  },
};
</script>
