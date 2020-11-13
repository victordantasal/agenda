<template>
  <v-card class="a-card" :width="width">
    <v-card-title class="title pa-4 pb-3">
      <slot name="title">
      </slot>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="body">
      <slot name="body">
      </slot>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="d-flex justify-end actions">
      <v-btn text 
        :ripple="false" 
        class="text-capitalize" 
        color="#fa7268" 
        @click="$emit('cancel')">Cancelar
      </v-btn>

      <v-btn rounded 
        :ripple="false"
        class="text-capitalize px-4 py-2 white--text"
        color="#fa7268" 
        :class="{ disabled: !isValid }"
        @click="isValid ? $emit('submit') : ''">
        <slot name="submit"></slot>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    isValid: Boolean
  }
}
</script>

<style lang="scss">
  .a-card {
    border-radius: 16px !important;
    box-shadow: 0px 16px 10px 0px rgba(0,0,0,0.16) !important;
    background-color: white;

    .title {
      color: #2a2d3b !important;
      font-weight: normal !important;
    }

    .body {
      padding: 20px 24px 22px 24px !important; 
      color: #2a2d3b !important;
      font-size: 14px;
    }

    .actions {
      padding: 16px !important; 
      .disabled {
        opacity: 0.32;
        cursor: initial !important;
      }
    }

    .v-divider {
      border: solid 1px #c0c3d2;
    }
  }

</style>