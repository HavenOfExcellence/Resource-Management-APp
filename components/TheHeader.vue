<template>
  <div class="text-red-800">asdasd{{ data }}</div>
</template>

<script setup>
const { data: data } = await useFetch("/api/hello");
</script>
