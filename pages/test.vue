<script setup>
const people = ref(null);
const time = ref("");
</script>
<template>
  <div>
    <multiselect
      v-model="people"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
      :options="[
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
      ]"
    >
      <template
        slot="selection"
        track-by="name"
        slot-scope="{ values, search, isOpen }"
        ><span
          class="multiselect__single"
          v-if="values.length &amp;&amp; !isOpen"
          >{{ values.length }} options selected</span
        ></template
      >
    </multiselect>
    <Datepicker class="h-12 w-full" v-model="time" timePicker />
    <EventModal />
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
