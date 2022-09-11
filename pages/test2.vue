<script setup>
const pusher = ref(0);

function update() {
  pusher.value++;
}
</script>

<template>
  <view-wrapper title="Test">
    <button @click="update()">Click me</button>
    <modal-item :watcher="pusher"></modal-item>
  </view-wrapper>
</template>
