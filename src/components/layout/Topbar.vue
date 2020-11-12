<template>
  <v-row class="topbar pa-sm-4 pa-2" no-gutters :style="height">
    <v-col 
      cols="12" 
      sm="3" 
      class="d-flex justify-space-between mb-sm-0 mb-2"
    >
      <img alt="Ubook logo" src="@/assets/ic-logo.svg" class="ubook-logo" :to="{ name: 'Home' }">

      <AButton class="mr-sm-6"></AButton>
    </v-col>
    <v-col 
      cols="12" 
      sm="9" 
      class="search-box"
    >
      <input type="text" placeholder="Buscar..." :value="searchQuery" @input="setSearchQuery($event.target.value)">
      <v-icon size="16">$search</v-icon>
    </v-col>   
  </v-row>
</template>

<script>
import AButton from '@/components/ui/AButton.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { AButton },

  computed: {
    ...mapGetters(['searchQuery']),
    height () {
      if (this.$vuetify.breakpoint.xsOnly) {
        return {
          maxHeight: '96px'
        } 
      }
      return {
          maxHeight: '64px'
        } 
    }
  },

  methods: {
    ...mapActions(['setSearchQuery'])
  }
}
</script>

<style lang="scss">
  .topbar {
    .ubook-logo {
      cursor: pointer;
    }

    .col {
      height: 32px;
    }
    .search-box {
      background-color: #e4e7f4;
      border-radius: 4px;

      input {
        margin: 7px 0px 6px 8px;
        height: 19px;
        width: calc(100% - 32px);
        font-size: 16px;
      }
      input::placeholder {
        color: #9198af;
      }
    }
  }
</style>