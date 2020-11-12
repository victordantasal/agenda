<template>
  <v-app>
    <Topbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Topbar from '@/components/layout/Topbar.vue'
export default {
  components: { Topbar }
}
</script>

<style>

</style>