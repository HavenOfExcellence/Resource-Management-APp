<script setup>
import { ref } from "vue";
import {
  month_convert,
  getfirstdateofmonth,
  getmaxdateofmonth,
} from "@/utils/Calendar";

const year = useState("year", () => new Date().getFullYear());
const month = useState("month", () => new Date().getMonth() + 1);
// const day = useState("day", () => new Date().getDate());
const day = useState("day", () => 3);

const start_day = ref(getfirstdateofmonth(month.value, year.value));
const end_day = ref(getmaxdateofmonth(month.value, year.value));

const {
  data: eventdates,
  refresh: refreshmonth,
  pending: pendingmonth,
} = await useAsyncData("eventdates", () =>
  $fetch("/api/eventmonth", {
    params: {
      year: year.value,
      month: month.value,
    },
  })
);

const {
  data: schedule,
  refresh,
  pending,
} = await useAsyncData("schedule", () =>
  $fetch("/api/event", {
    params: {
      day: day.value,
      month: month.value,
      year: year.value,
    },
  })
);

function goToEvent(id) {
  console.log(id);
  navigateTo(`event/${id}`);
}

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
  end_day.value = getmaxdateofmonth(month.value, year.value);

  refreshmonth();
}

async function getinfo(numb) {
  day.value = numb;

  refresh();
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
            <button
              @click="getinfo(numb)"
              v-for="numb in end_day"
              class="flex flex-col items-center"
            >
              <p>{{ numb }}</p>
              <div
                class="flex flex-row gap-2"
                v-if="eventdates[numb - 1] !== 0"
              >
                <div
                  v-for="num in eventdates[numb - 1]"
                  class="w-1 h-1 bg-blue-500 rounded-full"
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white border border-gray-200 rounded flex flex-col">
        <h2 class="text-center my-2 font-semibold text-gray-900 text-base">
          Schedule for {{ month_convert(month) }} {{ day }}, {{ year }}
        </h2>
        <div v-if="!pending">
          <div v-if="schedule.events.length === 0">
            There are currently no events on this date
          </div>
          <div
            class="grid grid-cols-6 items-center"
            v-for="event in schedule.events"
          >
            <div class="h-full col-span-3">
              <div v-if="event.colour === null">
                <h2 class="mx-4 font-bold text-sm">{{ event.name }}</h2>
              </div>
              <div v-if="event.colour === `GREEN`">
                <h2 class="mx-4 font-bold text-green-500 text-sm">
                  {{ event.name }}
                </h2>
              </div>
              <div v-if="event.colour === `RED`">
                <h2 class="mx-4 font-bold text-red-500 text-sm">
                  {{ event.name }}
                </h2>
              </div>
              <div v-if="event.colour === `BLUE`">
                <h2 class="mx-4 font-bold text-blue-500 text-sm">
                  {{ event.name }}
                </h2>
              </div>
              <div v-if="event.colour === `ORANGE`">
                <h2 class="mx-4 font-bold text-orange-500 text-sm">
                  {{ event.name }}
                </h2>
              </div>
              <div v-if="event.colour === `VIOLET`">
                <h2 class="mx-4 font-bold text-violet-500 text-sm">
                  {{ event.name }}
                </h2>
              </div>
              <h2 class="mx-4 text-sm">{{ event.time }}</h2>
            </div>
            <div class="flex mb-5 -space-x-6 grow col-span-2">
              <div v-for="person in event.persons" :key="person">
                <ToolTip :message="`${person.name} - ${person.hub}`">
                  <div
                    class="relative border border-gray-300 w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
                  >
                    <svg
                      class="absolute w-12 h-12 text-gray-400 -left-1"
                      :fill="person.colour"
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
                      {{ person.name[0].toUpperCase() }}
                    </h2>
                  </div>
                </ToolTip>
              </div>
            </div>
            <button
              @click="goToEvent(event.id)"
              class="bg-blue-500 col-span-1 hover:bg-blue-700 mb-5 h-10 text-white font-bold rounded"
            >
              EDIT
            </button>
          </div>
        </div>
        <div v-else>There are currently no events on this date</div>
        <div class="grow"></div>
        <div class="flex items-center justify-center">
          <EventModal title="New Event" />
        </div>
      </div>
    </div>
    {{ day }}
    {{ eventdates }}
    ----
    {{ schedule }}
    {{ pending }}
    --
  </div>
</template>
