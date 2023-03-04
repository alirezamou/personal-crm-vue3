<template>
  <ul v-if="any">
    <Item v-for="item in items" :key="item.id" :class="type">
      {{ item[itemKey] }}
    </Item>
  </ul>
</template>

<script>
import { h } from "vue";

export default {
  name: "ListComp",
  components: {
    Item: {
      name: "Item",
      render() {
        return h("li", this.$slots.default());
      },
    },
  },
  props: {
    items: {
      default: () => [],
      type: Array,
    },
    itemKey: {
      default: () => "value",
      type: String,
    },
    type: {
      default: () => "item",
      type: String,
    },
  },
  computed: {
    any() {
      return this.items.length > 0;
    },
  },
};
</script>
