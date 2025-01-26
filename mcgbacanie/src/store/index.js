import { createStore } from 'vuex';

// Importam modulele pentru gestionarea produselor si detaliilor
import productsModule from './modules/products';
import detailsModule from './modules/details';

// Cream store-ul principal si inregistram modulele
const store = createStore({
  modules: {
    // Modul pentru gestionarea produselor
    products: productsModule,
    // Modul pentru gestionarea detaliilor produselor
    details: detailsModule,
  },
});

export default store;
