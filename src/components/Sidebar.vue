<template>
  <div id="sidebar" class="flex-1 min-w-1/4">
    <div class="flex justify-between text-sm mb-2 font-semibold">
      <span>Contacts: {{ contacts.length }}</span>
      <router-link to="/" class="!text-[#000] hover:no-underline hover:text-[#000]">+ new contact</router-link>
    </div>
    <input type="text" placeholder="Search Name" class="input" v-model="searchQuery">
    <div v-if="isFetching" class="h-full flex flex-col justify-start items-center">
      <LoadingOverlay classnames="text-purple"/>
    </div>
    <ListComp v-else :items="filteredContacts" itemKey="name" type="contact" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ListComp from "./general/ListComp.vue";
import LoadingOverlay from "./general/LoadingOverlay.vue";
export default {
  name: "SideBar",
  data() {
    return {
      searchQuery: "",
    }
  },
  mounted() {
    console.log("sidebar mounted");
  },
  computed: {
    ...mapState(["isFetching"]),
    ...mapGetters(["contacts"]),
    filteredContacts() {

      return this.contacts.all().filter(contact => {
        return contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      });
    },
  },
  components: {
    ListComp,
    LoadingOverlay
  },
};
</script>
