<template>
  <v-container 
    class="home pa-4" 
    fluid
  >
    <ContactsList />

  </v-container>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue'

export default {
  components: { ContactsList }
  
}
</script>
