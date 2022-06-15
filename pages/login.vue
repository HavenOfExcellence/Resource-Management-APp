<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

function onSubmit(values) {
  console.log("ASDASD");
  console.log(values);
  navigateTo("/scenario");
}

const schema = yup.object({
  password: yup.string().required("Password is required"),
  email: yup.string().email("Invalid email"),
});

function validatename() {
  return true;
}

function validateemail() {
  return true;
}

const isname = ref(true);
const isusername = ref(false);
const isemail = ref(false);
const ispassword = ref(false);

function alert() {
  console.log("asdasdasd");
}

function onname() {
  isname.value = true;
}
function onusername() {
  isusername.value = true;
}
function onemail() {
  isemail.value = true;
}
function onpassword() {
  ispassword.value = true;
}
</script>

<template>
  <div
    class="mt-10 sm:mt-0 fixed w-full h-full bg-yellow-200 flex justify-center items-center"
  >
    <div class="">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <Form @submit="onSubmit" :validation-schema="schema">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <h1 class="text-gray-800 font-bold text-2xl mb-8">
                Battalion Digital Defense Exercise
              </h1>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Username</label
                  >
                  <div v-on:click="onusername()">
                    <FormField
                      type="text"
                      name="username"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <ModalComponent
                    v-if="isusername"
                    title="Tips for Selecting a Username"
                    body="It is advised not to put any personal identifiers, such as your name, instagram handle ect. This allows websites to be able to target you."
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <div v-on:click="onemail()">
                    <FormField
                      type="text"
                      name="email"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      body="Do not put your real email"
                    />
                  </div>
                  <ModalComponent
                    v-if="isemail"
                    title="Tips for Selecting a Email"
                    body="Generally, if you are signing up for a website you do not trust, do use a secondary email address. This is to prevent spam bots from targeting you, and to prevent you from being tracked online"
                  />
                </div>
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <div v-on:click="onpassword()">
                    <FormField
                      type="password"
                      name="password"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <ModalComponent
                    v-if="ispassword"
                    title="Tips for Selecting a Password"
                    body="Password Recommendations: 
              1. Use longer passwords
              2. Do not reuse passwords
              3. Do not use personal information
              4. Implement MFA
              5. Change passwords in the event of a compromise"
                  />
                </div>
              </div>
            </div>
            <div
              class="px-4 py-3 bg-gray-50 text-right flex justify-center sm:px-6"
            >
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enter Activity
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
