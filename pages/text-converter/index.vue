<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Text converter')

// text to lower
const textToLower = useLocalStorage('text-converter-text-to-lower', '')

// text to replace
const textToReplace = useLocalStorage('text-converter-text-to-replace', '')
const replaceList = useLocalStorage('text-converter-replace-list', '')
const resultReplace = computed(() => {
  try {
    let list = replaceList.value.split(',').map((item) => item.split(':'))
    let result = textToReplace.value
    list.forEach((item) => {
      result = result.replace(new RegExp(item[0].trim(), 'g'), item[1].trim())
    })
    return result
  } catch (err) {
    return ''
  }
})
</script>
<template>
  <q-page padding>
    <p class="text-h5">Text converter</p>
    <div class="column q-gutter-md">
      <div class="col q-gutter-xs">
        <p>Lower case</p>
        <q-input v-model="textToLower" type="textarea" label="Text" filled clearable autogrow />
        <q-input
          :model-value="textToLower.toLowerCase()"
          type="textarea"
          label="Result"
          outlined
          autogrow
          readonly
        >
          <template v-slot:append>
            <q-icon
              name="content_copy"
              class="cursor-pointer"
              @click="copyToClipboard(textToLower.toLowerCase())"
            />
          </template>
        </q-input>
      </div>
      <div class="col q-gutter-xs">
        Text replace
        <q-input
          v-model="textToReplace"
          type="textarea"
          label="Text to replace"
          filled
          clearable
          autogrow
        />
        <q-input
          v-model="replaceList"
          type="textarea"
          label="Replace list"
          filled
          clearable
          autogrow
          hint="format array: key1: value1, key2: value2"
        />
        <q-input
          :model-value="resultReplace"
          type="textarea"
          label="Result"
          outlined
          autogrow
          readonly
        >
          <template v-slot:append>
            <q-icon
              name="content_copy"
              class="cursor-pointer"
              @click="copyToClipboard(resultReplace)"
            />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>
