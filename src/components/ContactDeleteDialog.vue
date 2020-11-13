<template>
  <v-dialog :value="value" @input="$emit('input', value)" width="432px" content-class="elevation-0" persistent>
    <ACard width="432px" height="207px" 
      @submit="onSubmit()" 
      @cancel="onCancel()"
      :isValid="true"
    >
      <template v-slot:title>
        Excluir contato
      </template>

      <template v-slot:body>
        <div style="padding-bottom: 35px;">Deseja realmente excluir o contato?</div>
      </template>

      <template v-slot:submit>
        Excluir
      </template>
    </ACard>
  </v-dialog>
</template>

<script>
import ACard from '@/components/ui/ACard'

export default {
  props: ['value'],

  components: { ACard },

  data() {
    return {
      contact: {}
    }
  },

  methods: {
    setContact(contact) {
      this.contact = contact
    },
    
    onCancel() {
      this.setContact({})
      this.$emit('cancel')
      this.$emit('input', false)
    },

    onSubmit() {
      this.$emit('input', false)
      this.$emit('submit', {...this.contact})
      this.setContact({})
    }
  },
}
</script>

<style>

</style>