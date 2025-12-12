<template>
  <div class="error-trigger">
    <button @click="triggerError" class="error-btn">
      Trigger Error
    </button>
  </div>
</template>

<script setup lang="ts">
const throwRuntimeError = () => {
  // This will throw a runtime error with a stack trace
  throw new Error('This is a runtime error from ErrorTrigger component!')
}

const triggerError = () => {
  throwRuntimeError()
}
</script>

<style scoped>
.error-trigger {
  margin-top: 1rem;
}

.error-btn {
  padding: 0.5rem 1rem;
  background-color: #f56565;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.error-btn:hover {
  background-color: #e53e3e;
}
</style>
