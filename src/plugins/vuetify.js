import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#C9956C',
          secondary: '#E8C9A0',
          background: '#FAFAFA',
          surface: '#FFFFFF',
        }
      }
    }
  }
})
