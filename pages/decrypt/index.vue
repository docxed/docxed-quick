<script setup lang="ts">
import { useTitle } from '@vueuse/core'
const { copy } = useClipboard()
import CryptoJS from 'crypto-js'

useTitle('Decrypt')

const key = useLocalStorage('decrypt-key', '')
const text = useLocalStorage('decrypt-text', '')
const iv = useLocalStorage('decrypt-iv', '')
const result = ref()

function onClear() {
  key.value = ''
  text.value = ''
}

function decrypt() {
  try {
    result.value = CryptoJS.AES.decrypt(text.value, CryptoJS.enc.Utf8.parse(key.value), {
      iv: CryptoJS.enc.Utf8.parse(iv.value),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8)
  } catch (err) {
    result.value = 'Invalid key or IV'
  }
}

watchEffect(() => {
  if (key.value && text.value && iv.value) {
    decrypt()
  } else {
    result.value = ''
  }
})
</script>
<template>
  <q-page padding>
    <p class="text-h5">Decrypt</p>
    <section class="q-col-gutter-y-sm">
      <q-input v-model="text" type="textarea" label="Encrypted text" filled clearable autogrow />
      <div class="row q-col-gutter-xs">
        <div class="col">
          <q-input v-model="key" label="Key" filled clearable icon="lock" />
        </div>
        <div class="col">
          <q-input v-model="iv" label="IV" filled clearable />
        </div>
      </div>
      <div class="row q-col-gutter-xs">
        <div class="col">
          <q-btn
            color="warning"
            icon="clear"
            label="Clear text"
            @click="text = ''"
            class="full-width"
          />
        </div>
        <div class="col">
          <q-btn
            color="negative"
            icon="delete_forever"
            label="Clear all"
            @click="onClear()"
            class="full-width"
          />
        </div>
      </div>
      <q-input v-model="result" type="textarea" label="text" outlined autogrow readonly>
        <template v-slot:append>
          <q-icon name="content_copy" class="cursor-pointer" @click="copy(result)" />
        </template>
      </q-input>
    </section>
  </q-page>
</template>
