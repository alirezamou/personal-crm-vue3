<template>
  <div>
    <h1>Show Contact</h1>
    {{ contact }}
  </div>
</template>

<script>
export default {
  name: "ShowContact",
  data() {
    return {
      contactId: this.$route.params.contactId,
    };
  },
  computed: {
    contact() {
      return this.$store.getters.findContactById(this.contactId);
    }
  },
  methods: {
    submit(data) {
      console.log(data);
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
