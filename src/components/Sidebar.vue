<template>
  <div id="sidebar" class="flex-1">
    <ListComp :items="contacts" itemKey="name" type="contact" />
  </div>
</template>

<script>
import ListComp from "./general/ListComp.vue";
export default {
  name: "SideBar",
  props: {
    contacts: Array,
  },
  components: {
    ListComp,
  },
};
</script>
