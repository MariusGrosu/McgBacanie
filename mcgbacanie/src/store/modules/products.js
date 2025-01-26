const productsModule = {
  namespaced: true, // Activeaza namespacing-ul pentru modul
  state: {
    products: [], // Lista de produse
  },
  mutations: {
    // Seteaza lista completa de produse
    setProducts(state, products) {
      state.products = products;
    },
    // Adauga un nou produs la lista existenta
    addProduct(state, product) {
      state.products.push(product);
    },
    // Sterge un produs din lista existenta folosind ID-ul
    deleteProduct(state, productId) {
      state.products = state.products.filter((product) => product.id !== productId);
    },
  },
  actions: {
    // Incarca lista de produse din localStorage si o seteaza in state
    loadProducts({ commit }) {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      commit('setProducts', products);
    },
    // Adauga un produs nou si salveaza lista actualizata in localStorage
    addProduct({ commit }, product) {
      const products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(product); // Adaugam produsul in lista
      localStorage.setItem('products', JSON.stringify(products)); // Salvam in localStorage
      commit('addProduct', product); // Actualizam state-ul Vuex
    },
    // Sterge un produs si actualizeaza localStorage
    deleteProduct({ commit }, productId) {
      let products = JSON.parse(localStorage.getItem('products')) || [];
      products = products.filter((product) => product.id !== productId); // Filtram produsul
      localStorage.setItem('products', JSON.stringify(products)); // Actualizam localStorage
      commit('deleteProduct', productId); // Actualizam state-ul Vuex
    },
  },
  getters: {
    // Returneaza lista de produse
    getProducts(state) {
      return state.products;
    },
  },
};

export default productsModule;
