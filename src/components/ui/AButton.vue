<template>
  <v-btn 
    :ripple="false" @click="onSubmit()"
    depressed
    class="a-button" 
    :style="buttonStyle"
    :class="{'large-button': large}"
  >
    <span class="text__slot d-flex">
      <slot>
        <v-icon left size="16px">$plus</v-icon> 
        Criar contato
      </slot>
    </span>
  </v-btn>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    color: {
      type: String,
      default: '#fa7268'
    },
    backgroundColor: {
      type: String,
      default: '#dbff90'
    },
    large: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      ...mapState(['showContactCreateDialog'])
    }
  },

  computed: {
    buttonStyle () {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {
    ...mapActions(['setShowContactCreateDialog']),
    onSubmit() {
      this.setShowContactCreateDialog(true)
    }
  },
}
</script>

<style lang="scss">
  .a-button {
    font-size: 14px !important;
    text-transform: none;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    border-radius: 20px;
    padding: 8px 22px 8px 16px !important;
    height: 32px !important;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16) !important;
    border: solid 1px rgba(255, 255, 255, 0.16);
  }
  .large-button {
    height: 40px !important;
    padding: 12px 22px 12px 16px !important;
  }
</style>