<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

function onSubmit(values) {
  console.log(values);
  console.log(values);
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

const isname = ref(false);
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
  <div class="w-full h-full bg-green-200 flex items-center justify-center">
    <div
      class="flex flex-col md:w-1/2 justify-center py-10 items-center bg-white"
    >
      <Form class="bg-white" @submit="onSubmit" :validation-schema="schema">
        <h1 class="text-gray-800 font-bold text-2xl mb-8">
          Battalion Digital Defense Exercise
        </h1>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <div v-on:click="onname()">
            <FormField
              class="pl-2 outline-none border-none"
              type="text"
              name="name"
              placeholder="Full name"
              :rules="validatename"
            />
            <ModalComponent
              v-if="isname"
              title="Tips for Selecting a Full Name"
            />
          </div>
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <div v-on:click="onusername()">
            <FormField
              class="pl-2 outline-none border-none"
              type=""
              name="username"
              placeholder="Username"
            />
            <ModalComponent
              v-if="isusername"
              title="Tips for Selecting a Username"
            />
          </div>
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <div v-on:click="onemail()">
            <FormField
              class="pl-2 outline-none border-none"
              type=""
              name="email"
              placeholder="Email Address"
            />
            <ModalComponent
              v-if="isemail"
              title="Tips for Selecting a Email Address"
            />
          </div>
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <div v-on:click="onpassword()">
            <FormField
              class="pl-2 outline-none border-none"
              type="text"
              name="password"
              placeholder="Password"
            />
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
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Enter Activity
        </button>
        {{ isname }}
        {{ isusername }}
        {{ isemail }}
        {{ ispassword }}
      </Form>
    </div>
  </div>
</template>
