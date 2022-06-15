<template>
  <div class="w-full h-full bg-green-200 flex items-center justify-center">
    <div
      class="flex flex-col md:w-1/2 justify-center py-10 items-center bg-white"
    >
      <Form class="bg-white" @submit="onSubmit">
        <h1 class="text-gray-800 font-bold text-2xl mb-8">
          Welcome to 41st Battalion Anniversary!!
        </h1>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <FormField
            class="pl-2 outline-none border-none"
            type="text"
            name="name"
            placeholder="Full name"
          />
          <button v-on:click="onname">asd</button>
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <FormField
            class="pl-2 outline-none border-none"
            type=""
            name="username"
            placeholder="Username"
          />
          <button v-on:click="onusername">asd</button>
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <FormField
            class="pl-2 outline-none border-none"
            type=""
            name="email"
            placeholder="Email Address"
          />
          <button v-on:click="onemail">asd</button>
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <FormField
            class="pl-2 outline-none border-none"
            type="text"
            name="password"
            placeholder="Password"
          />
          <button v-on:click="onpassword">asd</button>
        </div>
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Begin
        </button>
        {{ isname }}
        {{ isusername }}
        {{ isemail }}
        {{ ispassword }}
      </Form>
    </div>
    <ModalComponent />
  </div>
</template>
<script setup>
import { Form } from "vee-validate";

function onSubmit(values) {
  console.log(values);
  console.log(values);
}

const isname = ref(false);
const isusername = ref(false);
const isemail = ref(false);
const ispassword = ref(false);

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
