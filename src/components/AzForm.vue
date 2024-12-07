<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <div class="az-form">
    {{ title ?? 'AZ Form Title' }}
  </div>
</template>
