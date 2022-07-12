<script setup>
import { Form, defineRule } from "vee-validate";
import * as yup from "yup";

async function onSubmit(values) {
  const { email, password, password2, hub } = values;

  if (password !== password2) {
    alert("Passwords should match");
    return;
  }

  const data = await useFetch("/api/signup", {
    params: {
      email: values.email,
      password: values.password,
      hub: values.hub,
    },
  });

  console.log(data.data.value);
  console.log(values);
}

const schema = yup.object({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

defineRule("confirmed", (value, [other]) => {
  if (value !== other) {
    return `Passwords do not match`;
  }
  console.log("asdasd");
  return true;
});
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
              <h1 class="text-gray-800 font-bold text-2xl mb-8">Signup</h1>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <div>
                    <FormField
                      type="text"
                      name="email"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <div>
                    <FormField
                      type="password"
                      name="password"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Confirm Password</label
                  >
                  <div>
                    <FormField
                      type="password"
                      name="password2"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      rules="confirmed:@password"
                    />
                  </div>
                </div>
                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Hub</label
                  >
                  <div>
                    <FormField
                      type="text"
                      name="hub"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
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
                Signup
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
