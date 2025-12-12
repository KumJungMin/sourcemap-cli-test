<template>
  <button class="btn" @click="onClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => {
  emit('click')
}
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background-color: #369970;
}
</style>
