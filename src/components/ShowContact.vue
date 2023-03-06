<template>
  <div>
    <h1>Show Contact</h1>
    {{ contact(contactId) }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShowContact",
  data() {
    return {
      contactId: this.$route.params.contactId,
    };
  },
  computed: {
    ...mapGetters({
      contact: "findContactById"
    })
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
