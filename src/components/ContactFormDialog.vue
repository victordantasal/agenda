<template>
  <v-dialog :value="value" @input="$emit('input', value)" width="432px" content-class="elevation-0" persistent>
    <ACard width="432px" height="342px" 
      @submit="onSubmit()" 
      @cancel="onCancel()"
      :isValid="isValid"
    >
      <template v-slot:title>
        <slot name="title"></slot>
      </template>

      <template v-slot:body>
        <form @keyup.enter="isValid ? onSubmit() : ''">
          <AInput v-model="contact.name" label="Nome"/>
          <AInput v-model="contact.email" class="my-3" label="E-mail"/>
          <v-col cols="12" md="4" class="pa-0">
            <AInput v-model="contact.phone" label="Telefone" mask="(##) #####-####"/>
          </v-col>
        </form>
      </template>

      <template v-slot:submit>
        Salvar
      </template>
    </ACard>
  </v-dialog>
</template>

<script>
import ACard from '@/components/ui/ACard'
import AInput from '@/components/ui/AInput'

export default {
  props: ['value'],

  components: { ACard, AInput },

  data() {
    return {
      contact: {}
    }
  },

  computed: {
    isValid() {
      return !!this.contact.name || !!this.contact.email || !!this.contact.phone
    }
  },

  methods: {
    setContact(value) {
      this.contact = { ...value }
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