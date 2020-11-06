import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'
import IconComponent from '@/components/icons/CustomIcon.vue'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },

  lang: {
    locales: { pt },
    current: 'pt',
  },

  icons: {
    values: {
      delete: {
        component: IconComponent,
        props: {
          name: 'delete'
        }
      },

      plus: {
        component: IconComponent,
        props: {
          name: 'plus'
        }
      },

      search: {
        component: IconComponent,
        props: {
          name: 'search'
        }
      },

      edit: {
        component: IconComponent,
        props: {
          name: 'edit'
        }
      }
    }
  }
})