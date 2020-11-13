<template>
  <ContactFormDialog :value="showContactCreateDialog" @input="setShowContactCreateDialog" @submit="onCreate">
    <template v-slot:title>Criar novo contato</template>
  </ContactFormDialog>
</template>

<script>
import ContactFormDialog from '@/components/ContactFormDialog'
import { mapActions, mapState } from 'vuex'
export default {
  components: { ContactFormDialog },

  computed: {
    ...mapState(['showContactCreateDialog'])
  },

  methods: {
    ...mapActions(['addContact', 'setShowContactCreateDialog']),
    onCreate(value) {
      this.addContact(value)
    }
  },
}
</script>

<style>

</style>