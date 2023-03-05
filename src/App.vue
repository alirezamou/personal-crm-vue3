<template>
  <div id="app" class="container">
    <Sidebar :contacts="contacts.all()" />
    <AppContent />
  </div>
</template>

<script>
import Model from "@codeship/modelist";
import AppContent from "./components/AppContent.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  mounted() {
    this.$emitter.on("add-contact", (payload) => this.addContact(payload));
  },
  data() {
    return {
      contacts: new Model({
        setPrimaryKey: true,
        data: [{ name: "jane doe" }, { name: "john doe" }],
      }),
    };
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
