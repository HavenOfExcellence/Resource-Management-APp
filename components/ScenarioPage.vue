<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          3TPT Digital Defense Activity
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Scenario {{ scenario }}
        </p>
        <p class="underline mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          {{ title }}
        </p>
      </div>

      <!-- <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt class="">
              <p class="text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div> -->
      <div class="my-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent1 from "./ButtonComponent.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  scenario: {
    type: Number,
    required: true,
  },
});

const { title, scenario } = props;
</script>
