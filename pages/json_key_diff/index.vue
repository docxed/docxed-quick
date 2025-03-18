<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('JSON key diff')

const json1 = useLocalStorage('json-key-diff-json-1', '')
const json2 = useLocalStorage('json-key-diff-json-2', '')
const missingKeys1 = ref<string[]>([])
const missingKeys2 = ref<string[]>([])
const isErr = ref(false)

function onClear() {
  json1.value = ''
  json2.value = ''
}

watchEffect(() => {
  if (json1.value && json2.value) {
    try {
      const keys1 = Object.keys(JSON.parse(json1.value))
      const keys2 = Object.keys(JSON.parse(json2.value))
      missingKeys1.value = keys2.filter((key) => !keys1.includes(key))
      missingKeys2.value = keys1.filter((key) => !keys2.includes(key))
      isErr.value = false
    } catch (err) {
      isErr.value = true
      missingKeys1.value = []
      missingKeys2.value = []
    }
  } else {
    missingKeys1.value = []
    missingKeys2.value = []
    isErr.value = false
  }
})
</script>
<template>
  <q-page padding>
    <p class="text-h5">JSON key diff</p>
    <div class="row q-gutter-x-sm">
      <div class="col q-gutter-y-sm tw-text-lg">
        <section v-if="isErr" class="text-h6 text-negative">❌ Error</section>
        <section v-else>
          <p class="text-h6">Missing keys in JSON 1</p>
          <ol class="text-h6">
            <li v-for="(key, i) in missingKeys1" :key="`missing-key-1-${i}`">{{ key }}</li>
          </ol>
          <p class="text-h6">Missing keys in JSON 2</p>
          <ol class="text-h6">
            <li v-for="(key, i) in missingKeys2" :key="`missing-key-2-${i}`">{{ key }}</li>
          </ol>
        </section>
      </div>
      <div class="col q-gutter-y-sm">
        <q-input v-model="json1" type="textarea" label="JSON 1" filled clearable />
        <q-input v-model="json2" type="textarea" label="JSON 2" filled clearable />
        <q-btn
          color="negative"
          icon="delete_forever"
          label="Clear all"
          @click="onClear()"
          class="full-width"
        />
      </div>
    </div>
  </q-page>
</template>
