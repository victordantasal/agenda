<template>
  <ContactFormDialog ref="form"
    :value="showContactUpdateDialog" 
    @input="setShowContactUpdateDialog" 
    @submit="onUpdate"
  >
    <template v-slot:title>Editar contato</template>
  </ContactFormDialog>
</template>

<script>
import ContactFormDialog from '@/components/ContactFormDialog'
import { mapActions, mapState } from 'vuex'
export default {
  components: { ContactFormDialog },

  computed: {
    ...mapState(['showContactUpdateDialog', 'currentEditingContact'])
  },

  methods: {
    ...mapActions(['editContact', 'setShowContactUpdateDialog']),
    onUpdate(value) {
      this.editContact(value)
    }
  },

  watch: {
    'showContactUpdateDialog'(isOpen) {
      if (isOpen) {
        this.$refs.form.setContact(this.currentEditingContact)
      }
    }
  },
}
</script>

<style>

</style>