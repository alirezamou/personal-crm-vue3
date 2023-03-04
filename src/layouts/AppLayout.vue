<template>
  <div class="w-screen h-screen flex">
    <slot name="sidebar">Fallback Side bar</slot>
    <slot name="mainContent" class="flex-grow">Main Content Fallback</slot>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>
