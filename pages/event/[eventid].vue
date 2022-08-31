<script setup>
const route = useRoute();

const { data: event } = useFetch("/api/eventbyid", {
  params: {
    eventid: route.params.eventid,
  },
});

console.log(event);
</script>

<template>
  {{ $route.params.eventid }}
  {{ JSON.stringify(event) }}
</template>
