<template>
  <div id="app" class="container">
    <Sidebar :contacts="contacts.all()" />
    <AppContent />
  </div>
</template>

<script>
import AppContent from "./components/AppContent.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  mounted() {
    this.$emitter.on("add-contact", (payload) => this.addContact(payload));
  },
  computed: {
    contacts() {
      return this.$contacts;
    }
  },
  watch: {
    $contacts: {
      handler() {
        this.contacts();
      }
    }
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
