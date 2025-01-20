<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import CryptoJS from 'crypto-js'
import { copyToClipboard } from '~/utils'

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
    <section class="q-gutter-xs">
      <q-input v-model="text" type="textarea" label="Encrypted text" filled clearable autogrow />
      <q-input v-model="key" label="Key" filled clearable />
      <q-input v-model="iv" label="IV" filled clearable />
      <section class="text-center q-gutter-xs">
        <q-btn color="warning" icon="clear" label="Clear text" @click="text = ''" />
        <q-btn color="negative" icon="clear" label="Clear all" @click="onClear()" />
      </section>
    </section>
    <section class="q-mt-md">
      <q-input v-model="result" type="textarea" label="text" outlined autogrow readonly>
        <template v-slot:append>
          <q-icon name="content_copy" class="cursor-pointer" @click="copyToClipboard(result)" />
        </template>
      </q-input>
    </section>
  </q-page>
</template>
