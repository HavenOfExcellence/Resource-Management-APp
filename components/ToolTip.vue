<script setup>
const props = defineProps({
  message: {
    type: String,
    default: "Test Message",
  },
});

const { message } = props;
</script>

<template>
  <div class="relative flex flex-col items-center group">
    <slot> </slot>
    <div
      class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex"
    >
      <span
        class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md"
        >{{ message }}</span
      >
      <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
    </div>
  </div>
</template>
