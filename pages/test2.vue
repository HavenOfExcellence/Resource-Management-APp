<script setup>
const { data: stuff } = await useFetch("/api/hello");
</script>

<template>
  {{ stuff }}
</template>
