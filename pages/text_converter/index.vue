<script setup lang="ts">
import { useTitle } from '@vueuse/core'
const { copy } = useClipboard()

useTitle('Text converter')

// text to lower
const textToLower = useLocalStorage('text-converter-text-to-lower', '')

// text to replace
const textToReplace = useLocalStorage('text-converter-text-to-replace', '')
const replaceList = useLocalStorage<{ find: string; replace: string }[]>(
  'text-converter-replace-list',
  [],
)
const resultReplace = computed(() => {
  try {
    let result = textToReplace.value
    replaceList.value.forEach((replace) => {
      result = result.replaceAll(replace.find, replace.replace)
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
    <section class="q-col-gutter-y-sm">
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
            @click="copy(textToLower.toLowerCase())"
          />
        </template>
      </q-input>

      <br />
      <p>Text replace</p>
      <q-input
        v-model="textToReplace"
        type="textarea"
        label="Text to replace"
        filled
        clearable
        autogrow
      />
      <q-icon
        name="add"
        class="cursor-pointer"
        @click="replaceList.push({ find: '', replace: '' })"
        color="primary"
        size="sm"
      />
      <div
        class="row q-col-gutter-x-xs"
        v-for="(replace, index) in replaceList"
        :key="`replace-${index}`"
      >
        <div class="col">
          <q-input v-model="replace.find" label="Find" filled dense />
        </div>
        <div class="col">
          <q-input v-model="replace.replace" label="Replace" filled dense>
            <template v-slot:append>
              <q-icon
                name="delete"
                class="cursor-pointer"
                @click="replaceList.splice(replaceList.indexOf(replace), 1)"
              />
            </template>
          </q-input>
        </div>
      </div>
      <q-input
        :model-value="resultReplace"
        type="textarea"
        label="Result"
        outlined
        autogrow
        readonly
      >
        <template v-slot:append>
          <q-icon name="content_copy" class="cursor-pointer" @click="copy(resultReplace)" />
        </template>
      </q-input>
    </section>
  </q-page>
</template>
