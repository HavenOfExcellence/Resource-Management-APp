<template>
  {{ data }}
  <header class="flex items-center justify-end py-8">
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        <a class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
          Home
        </a>
        <a class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
          Calendar
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const { data: data } = await useFetch("/api/hello");
</script>
