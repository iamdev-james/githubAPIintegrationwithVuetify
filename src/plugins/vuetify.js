import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#fff',
        secondary: '#f5f8ff',
        accent: '#2c2c2c',
        error: 'f5f5f5',
        background: '#000'
      },
      dark: {
        primary: '#000000',
        secondary: '#333',
        background: '#ffffff'
      }
    }
  }
})
