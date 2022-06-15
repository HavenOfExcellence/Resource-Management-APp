<script setup>
import { Form, ErrorMessage } from "vee-validate";

const schema = {
  answer(value) {
    if (value === undefined) {
      return "Answer is required";
    } else if (value === "1") {
      return true;
    } else {
      return "Wrong answer";
    }
  },
};

const props = defineProps({
  question: {
    type: String,
    default: "how are you bro?",
  },
  answers: {
    type: Array,
    default: [
      {
        text: "Good answer",
        value: "1",
      },
      {
        text: "Bad answer",
        value: "2",
      },
      {
        text: "Troll answer",
        value: "3",
      },
      {
        text: "I'm fine",
        value: "4",
      },
    ],
  },
  link: {
    type: String,
    default: "https://www.google.com",
  },
});

const { question, link, answers } = props;

function onSubmit(values) {
  console.log("ASDASD");
  console.log(values);
  navigateTo(link);
}
</script>

<template>
  <div class="flex flex-col px-5 justify-center items-center">
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      class="flex flex-col items-start w-full"
    >
      <h4 class="mt-10 text-xl">Question</h4>
      <div class="mt-4 text-2xl">{{ question }}</div>
      <div
        v-for="(answer, index) in answers"
        class="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-gray-200 border-black/10 rounded-xl"
      >
        <FormField
          :disable="true"
          :value="answer.value"
          name="answer"
          type="radio"
          class="w-6 h-6 bg-black"
        />
        <p class="ml-6">{{ answer.text }}</p>
      </div>
      <ErrorMessage
        class="block mt-xs text-red-500 font-medium"
        name="answer"
      />
      <div class="flex justify-between w-full mt-4 text-white">
        <button type="submit" class="w-[49%] py-3 bg-indigo-600 rounded-lg">
          Next
        </button>
      </div>
    </Form>
  </div>
</template>
