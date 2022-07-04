<script setup>
const { data: stuff } = await useFetch("/api/hello");
const { data: other } = await useFetch("/api/event", {
  params: {
    day: 12,
    month: 6,
    year: 2002,
  },
});
</script>

<template>
  {{ stuff }}
  {{ other }}
</template>
