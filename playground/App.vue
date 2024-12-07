<script setup lang="ts">
import { ref } from 'vue';
import { AzForm } from 'az-forms';
import type { FormState } from 'az-forms';

const state = ref<FormState>({ title: 'Hello world' });
</script>

<template>
  <AzForm :title="state.title" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
