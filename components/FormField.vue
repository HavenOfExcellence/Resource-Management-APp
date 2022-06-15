<script setup>
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  rules: {
    type: Function,
    default: null,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const { placeholder, rules, label, name, type } = props;

console.log({ placeholder, rules, label, name, type });
console.log("asd");

function returnfalse() {
  return false;
}
</script>

<template>
  <Field
    :name="name"
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :rules="rules"
  />
  <ErrorMessage :name="name" />
</template>
