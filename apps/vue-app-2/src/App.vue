<template>
  <div class="app">
    <h1>Vue App 2</h1>
    <Button label="Click me!" @click="handleClick" />
    <ErrorTrigger />
  </div>
</template>

<script setup lang="ts">
import Button from './components/Button.vue'
import ErrorTrigger from './components/ErrorTrigger.vue'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 2rem;
}
</style>
