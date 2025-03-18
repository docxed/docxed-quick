<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('JSON value diff')
</script>
<template>
  <q-page padding>
    <p class="text-h5">JSON value diff</p>
    <iframe src="https://jsondiff.com"></iframe>
  </q-page>
</template>
<style scoped>
iframe {
  border: none;
  width: 100%;
  height: 100vh;
}
</style>
