import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import router from './router/router.ts'

// Composables
import { createApp } from 'vue'


// Styles
import 'unfonts.css'
import { createVuetify } from 'vuetify'

//react나 vue는 항상 외부모듈을 사용할때 마운팅해야됨
/*const app = createApp(App)
const vuetify = createVuetify()
app.use(vuetify).use(router).mount('#app')*/
const vuetify = createVuetify()

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')


//registerPlugins(app)

