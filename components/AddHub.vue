<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";

import { Colour } from "@prisma/client";

const colouroptions = Object.keys(Colour).filter((item) => {
  return isNaN(Number(item));
});

async function submitvalues(values) {
  const { name, colour } = values;

  const data = await useLazyFetch("/api/addhub", {
    params: {
      name,
      colour,
    },
  });
}

function validateName(values) {
  return values === undefined ? "Name is Required" : true;
}

function validateColour(values) {
  return values === undefined ? "Colour is Required" : true;
}
</script>

<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:col-span-2 md:mt-0">
        <Form @submit="submitvalues">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Name</label
                  >
                  <Field
                    :rules="validateName"
                    type="text"
                    name="name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />

                  <ErrorMessage
                    class="block mt-xs text-red-700 font-medium"
                    name="name"
                  >
                  </ErrorMessage>
                </div>

                <div class="col-span-6">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >Colour</label
                  >
                  <Field
                    :rules="validateColour"
                    as="select"
                    id="country"
                    name="colour"
                    autocomplete="country-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option :value="option" v-for="option in colouroptions">
                      {{ option }}
                    </option>
                  </Field>

                  <ErrorMessage
                    class="block mt-xs text-red-700 font-medium"
                    name="colour"
                  >
                  </ErrorMessage>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
