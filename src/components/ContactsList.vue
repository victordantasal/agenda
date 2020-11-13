<template>
  <v-row class="contacts-list justify-center">
    <slot name="no-data" v-if="!hasContacts">
      <v-flex shrink class="empty-state text-center">
        <img :src="require('@/assets/ic-book.svg')" height="200px">

        <div class="my-6">Nenhum contato foi criado ainda.</div>

        <AButton large></AButton>
      </v-flex>
    </slot>

    <slot name="no-result" v-else-if="!contacts.length">
      <v-flex shrink class="empty-state text-center">
        <img :src="require('@/assets/ic-book.svg')" height="200px">

        <div class="my-6">Nenhum contato foi encontrado.</div>
      </v-flex>
    </slot>

    <table style="width: 100%;" v-else>
      <colgroup>
        <col span="1" 
          v-for="header in headers" 
          :key="`col-${header.value}`"
          :style="`width: ${header.width}`"
        >
      </colgroup>
      <thead>
        <th 
          v-for="header in headers"
          :key="`header-${header.value}`"
          :class="{action: header.text === 'actions'}"
        >
          {{header.text}}
        </th>        
      </thead>

      <transition-group tag="tbody" name="slide-fade">
        <tr 
          v-for="(item, idx) in contacts" 
          :key="`item-${item.id}`"
          :class="`highlight${item.isActive && isActive(item) ? '-active' : ''}`"
        >
          <td 
            v-for="column in headers" 
            :key="`column-${idx}-${column.value}`" 
            :align="column.align"
          >
            <template v-if="column.value === 'actions'">
              <v-btn icon small @click="openContactUpdateDialog(item)" class="mr-3"> <v-icon size="16">$edit</v-icon> </v-btn>
              <v-btn icon small @click="onRemove(item)"> <v-icon size="16">$delete</v-icon> </v-btn>
            </template>

            <template v-else-if="column.value === 'first-letter'">
              <v-avatar size="24" 
                :color="item.color" 
                class="white--text text-capitalize"
              >
                {{item.name[0]}}
              </v-avatar>
            </template>

            <template v-else>
              {{item[column.value]}}
            </template>
          </td>
        </tr>
      </transition-group>
    </table>

    <ContactDeleteDialog v-model="showContactDeleteDialog"
      ref="contactDeleteDialog"
      @submit="removeContact($event.id)"
      @cancel="showContactDeleteDialog = false"
    />
  </v-row>
</template>

<script>
import AButton from '@/components/ui/AButton.vue'
import ContactDeleteDialog from '@/components/ContactDeleteDialog'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { AButton, ContactDeleteDialog },

  props: {
    headers: {
      type: Array,
      default: () => [
        {text: '', value: 'first-letter', width: '48px'}, 
        {text: 'Contatos', value: 'name', width: '30%'}, 
        {text: 'E-mail', value: 'email', width: '30%'}, 
        {text: 'Telefone', value: 'phone', width: '29%'}, 
        {text: 'actions', value: 'actions', align: 'right'}
      ]
    }
  },

  data() {
    return {
      currentTime: new Date(),
      showContactDeleteDialog: false
    }
  },

  mounted() {
    setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
  },

  computed: {
    ...mapGetters(['contacts', 'hasContacts']),

    isActive() {
      return item => {
        item.isActive = this.currentTime.getTime() <= new Date(item.createdAt).getTime() + 10000
        return item.isActive
      }
    }
  },

  methods: {
    ...mapActions(['removeContact', 'openContactUpdateDialog']),

    onRemove(item) {
      this.showContactDeleteDialog = true
      this.$refs.contactDeleteDialog.setContact(item)
    }
  }
}
</script>

<style lang="scss">
  .contacts-list {
    margin: 0px;

    .v-avatar {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal
    }
    
    table {
      table-layout: fixed;
      border: solid 1px #e1e1e1;
      background-color: white;
      border-spacing: 0;
      border-radius: 4px;
    }

    tr, td {            
      height: 40px;
      border-top: solid 1px #e1e1e1;
      font-size: 14px;
    }

    td:first-child, td:last-child {
      padding: 0px 16px 0px 8px;
    }

    th {
      padding-top: 16px;
      padding-bottom: 9px;
      font-size: 13px;
      font-weight: normal;
      color: #9198af;
      text-align: left;
      font-size: 13px;
    }

    .action {
      width: 180px;
      opacity: 0;
    }

    .empty-state {
      margin-top: 80px;
    }

    .highlight {
      transition: all 0.5s;
    }

    tr:hover, .highlight-active {
      background: #fff3f2;
    }

    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
</style>