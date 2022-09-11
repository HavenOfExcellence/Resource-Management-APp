<script setup>
const route = useRoute();

const { data: event } = useFetch("/api/eventbyid", {
  params: {
    eventid: route.params.eventid,
  },
});

console.log(event.value);
</script>

<template>
  <ViewWrapper name="Event Information">
    <div v-if="event === `Error`">asdasd</div>
    {{ JSON.stringify(event) }}
  </ViewWrapper>
</template>
