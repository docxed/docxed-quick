<script setup lang="ts">
import { useTitle } from '@vueuse/core'
const { copy } = useClipboard()
import CryptoJS from 'crypto-js'

useTitle('Encrypt')

const key = useLocalStorage('encrypt-key', '')
const text = useLocalStorage('encrypt-text', '')
const iv = useLocalStorage('encrypt-iv', '')
const result = ref()

function onClear() {
  key.value = ''
  text.value = ''
}

function encrypt() {
  try {
    result.value = CryptoJS.AES.encrypt(text.value, CryptoJS.enc.Utf8.parse(key.value), {
      iv: CryptoJS.enc.Utf8.parse(iv.value),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString()
  } catch (err) {
    result.value = 'Invalid key or IV'
  }
}

watchEffect(() => {
  if (key.value && text.value && iv.value) {
    encrypt()
  } else {
    result.value = ''
  }
})
</script>
<template>
  <q-page padding>
    <p class="text-h5">Encrypt</p>
    <section class="q-col-gutter-y-sm">
      <q-input v-model="text" type="textarea" label="Text" filled clearable autogrow />
      <div class="row q-col-gutter-xs">
        <div class="col">
          <q-input v-model="key" label="Key" filled clearable />
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
      <q-input v-model="result" type="textarea" label="Encrypted text" outlined autogrow readonly>
        <template v-slot:append>
          <q-icon name="content_copy" class="cursor-pointer" @click="copy(result)" />
        </template>
      </q-input>
    </section>
  </q-page>
</template>
