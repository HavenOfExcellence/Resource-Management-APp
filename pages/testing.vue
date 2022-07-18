<script setup>
import { ref } from "vue";
import { month_convert, getfirstdateofmonth } from "@/utils/Calendar";

const year = ref(2022);
const month = ref(6);
const day = ref(0);

const start_day = ref(3);
const end_day = ref(30);

const schedule = reactive(
  ref({
    date: "070422",
    events: [
      {
        name: "SAF Parade",
        persons: ["ziyang", "andrew"],
        time: "Full Day",
      },
      {
        name: "Conference",
        persons: ["Daniel", "Denzel"],
        time: "2:00 PM to 3:00 PM",
      },
    ],
  })
);

const counter = useState("counter", () => 123);

function stepmonth(step) {
  month.value = month.value + step;
  day.value = 0;

  if (month.value > 12) {
    month.value = 1;
    year.value = year.value + 1;
  } else if (month.value <= 0) {
    month.value = 12;
    year.value = year.value - 1;
  }

  start_day.value = getfirstdateofmonth(month.value, year.value);
}

async function getinfo(dayinfo, monthinfo, yearinfo) {
  schedule.value = await useLazyFetch("api/event", {
    params: {
      day: dayinfo,
      month: monthinfo,
      year: yearinfo,
    },
  }).data;
  day.value = dayinfo;
}
</script>

<template>
  <div style="background: #fcfcfc">
    <div class="bg-green-700 grid grid-cols-2 divide-x p-8">
      <div class="bg-white border border-gray-200 divide-gray-200 rounded">
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
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ul>
          <div
            class="pb-3 grid grid-cols-7 gap-y-6 text-sm justify-items-center text-700"
          >
            <div v-for="item in start_day - 1"></div>
            <button @click="getinfo(numb, month, year)" v-for="numb in end_day">
              <p>{{ numb }}</p>
              <span
                class="w-3.5 h-3.5 bg-blue-300 border-2 border-white rounded-full"
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded flex flex-col">
        <!-- <body v-if="schedule.events == []" class="">
            <h2 class="font-semibold text-gray-900">Schedule for Today</h2>
            <ol class="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              <p>No meetings for today.</p>
            </ol>
          </body> -->
        <!-- Insidee Right -->

        <h2 class="text-center my-2 font-semibold text-gray-900 text-base">
          Schedule for {{ month_convert(month) }} {{ day }}, {{ year }}
        </h2>
        <div
          class="grid grid-cols-2 items-center"
          v-for="event in schedule.events"
        >
          <div class="h-full">
            <h2 class="mx-4 font-bold text-sm">{{ event.name }}</h2>
            <h2 class="mx-4 text-sm">{{ event.time }}</h2>
          </div>
          <div class="flex mb-5 -space-x-6 grow">
            <div v-for="person in event.persons">
              <ToolTip :message="person">
                <div
                  class="relative border border-gray-300 w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
                >
                  <svg
                    class="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <h2>
                    {{ person[0].toUpperCase() }}
                  </h2>
                </div>
              </ToolTip>
            </div>
          </div>
        </div>
        <div class="grow">asd</div>
        <div class="flex items-center justify-center">
          <EventModal title="New Event" />
        </div>
      </div>
    </div>
  </div>
  {{ start_day }}
  {{ counter }}
  {{ schedule }}
</template>
