import { createApp } from 'vue'; // Importa functia pentru a crea aplicatia Vue
import App from './App.vue'; // Importa componenta principala a aplicatiei
import router from './router'; // Importa router-ul configurat
import store from './store'; // Importa store-ul Vuex configurat
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa stilurile CSS Bootstrap
import 'bootstrap'; // Importa functionalitatile JavaScript Bootstrap

// Creeaza aplicatia Vue
const app = createApp(App);

// Integreaza router-ul in aplicatie
app.use(router);

// Integreaza store-ul Vuex in aplicatie
app.use(store);

// Monteaza aplicatia pe elementul cu ID-ul "app"
app.mount('#app');

// Optional: Exposeaza store-ul Vuex in `window` pentru debugging
window.$store = store;
