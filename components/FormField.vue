<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { boolean } from "yup";

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
  value: {
    type: String,
    default: "",
  },
  disable: {
    type: boolean,
    default: false,
  },
});

const { placeholder, disable, rules, label, name, type, value } = props;

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
    :change="change"
    :value="value"
    :disable="disable"
  />
  <ErrorMessage v-if="!disable" :name="name" />
</template>
