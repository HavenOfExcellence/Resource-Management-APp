<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));

function incre() {
  counter = counter + 1;
}
</script>
<template>
  <div>
    Counter: {{ counter }}
    <button @click="incre">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
