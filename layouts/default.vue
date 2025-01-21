<script setup lang="ts">
const $q = useQuasar()

const leftDrawerOpen = ref(false)

const menus = reactive([
  {
    label: 'Encrypt',
    to: '/encrypt',
  },
  {
    label: 'Decrypt',
    to: '/decrypt',
  },
  {
    label: 'Text converter',
    to: '/text_converter',
  },
])

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function initDarkMode() {
  const lsDarkMode = $q.localStorage.getItem('darkMode')
  let darkMode: boolean | 'auto' = 'auto'
  if (lsDarkMode === true || lsDarkMode === false || lsDarkMode === 'auto') {
    darkMode = lsDarkMode
  }
  $q.dark.set(darkMode)
  $q.localStorage.set('darkMode', darkMode)
}

onMounted(() => {
  initDarkMode()
})
</script>
<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer()" />
        <q-toolbar-title> x-tools </q-toolbar-title>
        <q-toggle
          :model-value="$q.dark.isActive"
          checked-icon="dark_mode"
          unchecked-icon="light_mode"
          color="info"
          size="3rem"
          @update:model-value="
            (val) => {
              $q.dark.set(val)
              $q.localStorage.set('darkMode', val)
            }
          "
        />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="menu in menus" :key="menu.label" clickable v-ripple :to="menu.to">
            <q-item-section>
              <q-item-label>{{ menu.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>
