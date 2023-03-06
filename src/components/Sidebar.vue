<template>
  <div id="sidebar" class="flex-1 min-w-1/4">
    <div class="flex justify-between text-sm mb-2 font-semibold">
      <span>Contacts: {{ contacts.length }}</span>
      <router-link to="/" class="!text-[#000] hover:no-underline hover:text-[#000]">+ new contact</router-link>
    </div>
    <ListComp :items="contacts.all()" itemKey="name" type="contact" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListComp from "./general/ListComp.vue";
export default {
  name: "SideBar",
  computed: {
    ...mapGetters(["contacts"]),
  },
  components: {
    ListComp,
  },
};
</script>
