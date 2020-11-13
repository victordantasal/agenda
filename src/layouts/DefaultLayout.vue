<template>
  <v-app>
    <Topbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <ContactUpdateDialog />
    <ContactCreateDialog />
  </v-app>
</template>

<script>
import Topbar from '@/components/layout/Topbar.vue'
import ContactCreateDialog from '@/components/ContactCreateDialog.vue'
import ContactUpdateDialog from '@/components/ContactUpdateDialog.vue'

export default {
  components: { Topbar, ContactCreateDialog, ContactUpdateDialog }
}
</script>

<style>

</style>