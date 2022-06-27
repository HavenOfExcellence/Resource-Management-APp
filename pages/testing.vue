<script setup>
import { ref } from "vue";
import { month_convert, getfirstdateofmonth } from "@/utils/Calendar";

const year = ref(2022);
const month = ref(6);
const start_day = ref(3);
const end_day = ref(30);

const counter = useState("counter", () => 123);

function stepmonth(step) {
  month.value = month.value + step;

  if (month.value > 12) {
    month.value = 1;
    year.value = year.value + 1;
  } else if (month.value <= 0) {
    month.value = 12;
    year.value = year.value - 1;
  }

  start_day.value = getfirstdateofmonth(month.value, year.value);
}
</script>
<template>
  <body style="background: #fcfcfc">
    <div
      class="max-w-sm mx-auto space-y-2 bg-white border border-gray-200 rounded-xl"
    >
      <div class="p-1 space-y-4">
        <header class="flex justify-between p-2">
          <button @click="stepmonth(-1)">
            <span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <p>{{ month_convert(month) }} {{ year }}</p>
          <button @click="stepmonth(1)">
            <span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </header>
        <ul class="grid grid-cols-7 text-sm justify-items-center text-700">
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
        <div
          class="pb-3 grid grid-cols-7 gap-y-6 text-sm justify-items-center text-700"
        >
          <div v-for="item in start_day - 1"></div>
          <button @click="counter = numb" v-for="numb in end_day">
            <p>{{ numb }}</p>
          </button>
        </div>
      </div>
      {{ start_day }}
      {{ counter }}
    </div>
  </body>
</template>
