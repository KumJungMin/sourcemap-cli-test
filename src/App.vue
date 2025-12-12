<template>
  <div>
    <h1>Decode Sourcemap CLI Test</h1>
    <button @click="throwError">Throw Error</button>
  </div>
</template>

<script setup lang="ts">
function throwError() {
  throw new Error("Test error from Vue CLI app")
}
</script>