<!-- This example requires Tailwind CSS v2.0+ -->
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Cyber Activity
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Here's some additional resources to help you!
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Thank you for participating in this cyber activity. do keep the tips
          we shared in mind!
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <!-- <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
              ></div> -->
              <p class="ml-4 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
              <a
                :href="feature.link"
                class="ml-4 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
              >
                {{ feature.link }}
              </a>
            </dt>
            <dd class="mt-2 ml-4 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="mt-6 flex items-center justify-center">
        <a href="/login"
          ><button
            class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Play Again
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: "Cyber Security Agency of Singapore",
    description:
      "The Cyber Security Agency of Singapore (CSA) was formed in 2015 and has been given the task of protecting Singapore’s cyberspace. It is part of the Prime Minister’s Office and is managed by the Ministry of Communications and Information.",
    link: "https://www.csa.gov.sg/",
  },
  {
    name: "Singapore Police Force",
    description:
      "The Singapore Police Force (SPF) is a uniformed organisation under the purview of the Ministry of Home Affairs. The mission of the SPF is to prevent, deter and detect crime to ensure the safety and security of Singapore. The SPF publishes advisories on cyber crime on a regular basis.",
    link: "https://www.police.gov.sg/Advisories/Crime/Cybercrime",
  },
  {
    name: "CISA (US)",
    description:
      "CISA leads the Nation’s strategic and unified work to strengthen the security, resilience, and workforce of the cyber ecosystem to protect critical services and American way of life.",
    link: "https://www.cisa.gov/",
  },
];
</script>
