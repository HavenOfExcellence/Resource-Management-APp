<script setup>
import { Form } from "vee-validate";

const props = defineProps({
  title: {
    type: String,
    default: "Toggle Modal",
  },
});

const { title } = props;

const eventname = ref("");
const fullday = ref(false);
const fromtime = ref("");
const totime = ref("");
const people = ref(null);

const names = ref([
  { name: "Jason", transform: "Jason-S1" },
  { name: "Adam", transform: "Adam-S2" },
  { name: "Felicia", transform: "Felicia-S2" },
  { name: "Zi Yang", transform: "Zi Yang-S3" },
  { name: "Paula", transform: "Paula-S3" },
  { name: "Harry", transform: "Harry-S1" },
]);

onMounted(async () => {
  data = await useFetch("/api/users").data;
  console.log(data);
});

function onSubmit() {
  console.log(
    eventname.value,
    fullday.value,
    fromtime.value,
    totime.value,
    people.value
  );
}
</script>

<template>
  <button
    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    data-modal-toggle="defaultModal"
  >
    {{ title }}
  </button>
  {{ names }}
  <!-- Main modal -->
  <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-auto h-auto">
      <!-- Modal content -->
      <div class="bg-white relative rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            New Event
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <Form @submit="onSubmit">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white">
                    <div class="grid grid-cols-6 gap-4">
                      <div class="col-span-4">
                        <label
                          for="first-name"
                          class="block text-sm font-medium text-gray-700"
                          >Event Name</label
                        >

                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div class="col-span-6 flex flex-col">
                        <label
                          for="street-address"
                          class="block text-sm font-medium text-gray-700"
                          >Date/Time</label
                        >
                        <div class="flex-row flex">
                          <Datepicker
                            placeholder="From"
                            class="h-12 w-full"
                            v-model="fromtime"
                            timePicker
                            :disabled="fullday"
                          />
                          <Datepicker
                            placeholder="To"
                            class="h-12 w-full"
                            v-model="totime"
                            timePicker
                            :disabled="fullday"
                          />
                        </div>
                      </div>
                      <div class="col-span-6 flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            v-model="fullday"
                            value=""
                            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <label
                          for="remember"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Full Day</label
                        >
                      </div>

                      <div class="col-span-6 sm:col-span-6">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                          >Users</label
                        >
                        <multiselect
                          v-model="people"
                          :multiple="true"
                          :close-on-select="false"
                          :clear-on-select="false"
                          :preserve-search="true"
                          placeholder="Pick some"
                          label="name"
                          track-by="transform"
                          :preselect-first="false"
                          :options="names"
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
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
