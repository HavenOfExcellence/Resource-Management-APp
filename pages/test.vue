<script setup>
const people = ref(null);
</script>
<template>
  <div>
    <multiselect
      v-model="people"
      :multiple="true"
      :options="[`ziyang`, `andrew`, `jacob`, `adam`, `eve`]"
    >
      <template slot="singleLabel" slot-scope="{ option }">{{
        option
      }}</template>
    </multiselect>
    <EventModal />
  </div>
</template>
